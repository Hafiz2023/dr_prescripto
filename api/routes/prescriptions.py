from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Prescription
from schemas import PrescriptionBase

router = APIRouter()

@router.post("/")
def add_prescription(prescription: PrescriptionBase, db: Session = Depends(get_db)):
    new_prescription = Prescription(**prescription.dict())
    db.add(new_prescription)
    db.commit()
    return {"message": "Prescription added successfully"}

@router.get("/")
def get_prescriptions(db: Session = Depends(get_db)):
    return db.query(Prescription).all()

@router.get("/{prescription_id}")
def get_prescription(prescription_id: int, db: Session = Depends(get_db)):
    return db.query(Prescription).filter(Prescription.id == prescription_id).first()

@router.put("/{prescription_id}")
def update_prescription(prescription_id: int, prescription: PrescriptionBase, db: Session = Depends(get_db)):
    db.query(Prescription).filter(Prescription.id == prescription_id).update(prescription.dict())
    db.commit()
    return {"message": "Prescription updated successfully"}

@router.delete("/{prescription_id}")
def delete_prescription(prescription_id: int, db: Session = Depends(get_db)):
    db.query(Prescription).filter(Prescription.id == prescription_id).delete()
    db.commit()
    return {"message": "Prescription deleted successfully"}

