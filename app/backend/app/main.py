from fastapi import FastAPI
from .database import engine
from .models import Base
from .routes import appointments

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(appointments.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to Evercare Hospital Appointment System"}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000) 
    
    

