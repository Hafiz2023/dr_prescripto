from pydantic import BaseModel
from typing import Optional

class AppointmentBase(BaseModel):
    is_first_visit: bool
    name: str
    contact_number: str
    email: str
    address: str
    specialty_type: str
    medical_department: str

class AppointmentCreate(AppointmentBase):
    pass

class Appointment(AppointmentBase):
    id: int

    class Config:
        orm_mode = True