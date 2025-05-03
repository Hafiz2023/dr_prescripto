from sqlalchemy import Column, Integer, String, Boolean
from .database import Base

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    is_first_visit = Column(Boolean)
    name = Column(String)
    contact_number = Column(String)
    email = Column(String)
    address = Column(String)
    specialty_type = Column(String)
    medical_department = Column(String)