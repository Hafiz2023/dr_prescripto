from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
import smtplib
from email.message import EmailMessage

app = FastAPI()

# --- Your Email Configuration ---
EMAIL_ADDRESS = "your_email@gmail.com"
EMAIL_PASSWORD = "your_app_password"  # Gmail App Password (not your normal password)

# --- Appointment Model ---
class Appointment(BaseModel):
    isFirstVisit: bool
    name: str
    contactNumber: str
    email: EmailStr
    address: str
    specialtyType: str
    medicalDepartment: str

# --- Send Email Function ---
def send_email(appointment: Appointment):
    msg = EmailMessage()
    msg["Subject"] = "New Appointment Request"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = EMAIL_ADDRESS  # You can change this if needed

    msg.set_content(f"""
    🏥 New Appointment Details:

    ✅ First Visit: {"Yes" if appointment.isFirstVisit else "No"}
    👤 Name: {appointment.name}
    📞 Contact: {appointment.contactNumber}
    📧 Email: {appointment.email}
    🏠 Address: {appointment.address}
    📚 Specialty Type: {appointment.specialtyType}
    🏥 Department: {appointment.medicalDepartment}
    """)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)

# --- API Route ---
@app.post("/appointment")
def receive_appointment(data: Appointment):
    try:
        send_email(data)
        return {"message": "Appointment received and email sent successfully!"}
    except Exception as e:
        return {"error": str(e)}
