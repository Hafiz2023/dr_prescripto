from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field, constr
from typing import List, Optional
from datetime import datetime
import uuid

app = FastAPI(title="Evercare Hospital Appointment API")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Model (In-memory for example)
class AppointmentDB(BaseModel):
    id: str
    is_first_visit: bool
    name: str
    contact_number: str
    email: EmailStr
    address: str
    medical_department: str
    specialty_type: str
    created_at: datetime

# Request Model with Validation
class AppointmentRequest(BaseModel):
    is_first_visit: bool
    name: str = Field(..., min_length=3, max_length=50)
    contact_number: str = Field(..., min_length=10, max_length=15)
    email: EmailStr
    address: str = Field(..., min_length=5, max_length=200)
    medical_department: str
    specialty_type: str

# Database Storage (Replace with real DB in production)
appointments_db: List[AppointmentDB] = []

# Medical Specialties Endpoint
@app.get("/api/specialties/medical", response_model=List[str])
async def get_medical_specialties():
    return [
        "Rheumatology Clinic",
        "Psychology Clinic",
        "Nutrition Clinic",
        # ... (all your medical specialties)
    ]

# Surgical Specialties Endpoint
@app.get("/api/specialties/surgical", response_model=List[str])
async def get_surgical_specialties():
    return [
        "Orthodontics",
        "Urology",
        "Surgical Oncology",
        # ... (all your surgical specialties)
    ]

# Create Appointment Endpoint
@app.post("/api/appointments", status_code=status.HTTP_201_CREATED)
async def create_appointment(appointment: AppointmentRequest):
    try:
        # Generate unique ID and timestamp
        appointment_id = str(uuid.uuid4())
        created_at = datetime.now()
        
        # Create DB record
        db_record = AppointmentDB(
            id=appointment_id,
            created_at=created_at,
            **appointment.dict()
        )
        
        # Store in "database"
        appointments_db.append(db_record)
        
        return {
            "message": "Appointment created successfully",
            "appointment_id": appointment_id,
            "created_at": created_at.isoformat()
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

# Get All Appointments (For Admin)
@app.get("/api/appointments", response_model=List[AppointmentDB])
async def get_appointments():
    return appointments_db

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)