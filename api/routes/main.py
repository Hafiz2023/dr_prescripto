from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, validator
from typing import Optional
import secrets
from datetime import datetime, timedelta
import databases # Database connection
import sqlalchemy
from passlib.context import CryptContext

# Database setup
DATABASE_URL = "sqlite:///./test.db"
database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

users = sqlalchemy.Table(
    "users",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("email", sqlalchemy.String(100), unique=True, index=True),
    sqlalchemy.Column("hashed_password", sqlalchemy.String(100)),
    sqlalchemy.Column("first_name", sqlalchemy.String(50)),
    sqlalchemy.Column("last_name", sqlalchemy.String(50)),
    sqlalchemy.Column("is_active", sqlalchemy.Boolean, default=True),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, default=datetime.utcnow),
)

engine = sqlalchemy.create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)
metadata.create_all(engine)

# Password context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# App setup
app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your Next.js frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    first_name: str
    last_name: str

    @validator('password')
    def password_complexity(cls, v):
        if len(v) < 8:
            raise ValueError('Password must be at least 8 characters')
        if not any(c.isupper() for c in v):
            raise ValueError('Password must contain at least one uppercase letter')
        if not any(c.isdigit() for c in v):
            raise ValueError('Password must contain at least one digit')
        if not any(not c.isalnum() for c in v):
            raise ValueError('Password must contain at least one special character')
        return v

class UserResponse(BaseModel):
    id: int
    email: str
    first_name: str
    last_name: str
    is_active: bool
    created_at: datetime

    class Config:
        orm_mode = True

# Helper functions
async def get_user_by_email(email: str):
    query = users.select().where(users.c.email == email)
    return await database.fetch_one(query)

async def create_user(user: UserCreate):
    hashed_password = pwd_context.hash(user.password)
    query = users.insert().values(
        email=user.email,
        hashed_password=hashed_password,
        first_name=user.first_name,
        last_name=user.last_name
    )
    user_id = await database.execute(query)
    return {**user.dict(), "id": user_id, "hashed_password": hashed_password}

# Routes
@app.post("/register/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register_user(user: UserCreate):
    db_user = await get_user_by_email(user.email)
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    try:
        created_user = await create_user(user)
        return created_user
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()