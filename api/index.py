from fastapi import FastAPI

### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

@app.get("/api/helloFastApi")
def hello_fast_api():
    return {"message": "Hello from FastAPI"}

import smtplib
import logging
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, validator
from typing import Optional
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("appointment.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Create FastAPI instance with custom docs
app = FastAPI(
    title="Evercare Hospital API",
    description="Hospital Appointment Management System",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Email Configuration (Replace with your Gmail credentials)
class EmailConfig:
    SMTP_SERVER = "smtp.gmail.com"
    SMTP_PORT = 587
    SMTP_USERNAME = "your.email@gmail.com"
    SMTP_PASSWORD = "your_app_password"
    FROM_EMAIL = "your.email@gmail.com"
    TO_EMAIL = "admin@evercare.com"

# Pydantic Models
class AppointmentRequest(BaseModel):
    isFirstVisit: bool
    name: str
    contactNumber: str
    email: EmailStr
    address: str
    medicalDepartment: str
    specialtyType: str
    timestamp: Optional[datetime] = None

    @validator('contactNumber')
    def validate_phone(cls, v):
        if not v.isdigit() or len(v) < 8:
            raise ValueError("Phone number must be at least 8 digits")
        return v

    @validator('name')
    def validate_name(cls, v):
        if len(v.strip()) < 3:
            raise ValueError("Name must be at least 3 characters")
        return v.strip()

# Utility Functions
def send_email(appointment: AppointmentRequest):
    try:
        # Create email content
        msg = MIMEMultipart()
        msg['From'] = EmailConfig.FROM_EMAIL
        msg['To'] = EmailConfig.TO_EMAIL
        msg['Subject'] = f"New Appointment - {appointment.name}"
        
        html = f"""
        <h2>New Appointment Details</h2>
        <table border="1">
            <tr><th>Field</th><th>Value</th></tr>
            <tr><td>Patient Name</td><td>{appointment.name}</td></tr>
            <tr><td>Contact</td><td>{appointment.contactNumber}</td></tr>
            <tr><td>Email</td><td>{appointment.email}</td></tr>
            <tr><td>Department</td><td>{appointment.medicalDepartment}</td></tr>
            <tr><td>First Visit</td><td>{'Yes' if appointment.isFirstVisit else 'No'}</td></tr>
            <tr><td>Submitted At</td><td>{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</td></tr>
        </table>
        """
        
        msg.attach(MIMEText(html, 'html'))
        
        # Send email
        with smtplib.SMTP(EmailConfig.SMTP_SERVER, EmailConfig.SMTP_PORT) as server:
            server.starttls()
            server.login(EmailConfig.SMTP_USERNAME, EmailConfig.SMTP_PASSWORD)
            server.send_message(msg)
            
        return True
    except Exception as e:
        logger.error(f"Email sending failed: {str(e)}")
        raise

# API Endpoints
@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/hello")
async def hello():
    return {"message": "Welcome to Evercare Hospital API"}

@app.post("/api/appointments", status_code=status.HTTP_201_CREATED)
async def create_appointment(appointment: AppointmentRequest):
    try:
        appointment.timestamp = datetime.now()
        send_email(appointment)
        
        return {
            "status": "success",
            "data": {
                "patient": appointment.name,
                "department": appointment.medicalDepartment,
                "reference_id": f"EV-{datetime.now().timestamp()}"
            }
        }
    except Exception as e:
        logger.error(f"Appointment failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create appointment"
        )

# Startup Event
@app.on_event("startup")
async def startup():
    logger.info("Starting Evercare Hospital API Server")
    try:
        # Test email configuration
        with smtplib.SMTP(EmailConfig.SMTP_SERVER, EmailConfig.SMTP_PORT) as server:
            server.starttls()
            server.login(EmailConfig.SMTP_USERNAME, EmailConfig.SMTP_PASSWORD)
        logger.info("Email service test successful")
    except Exception as e:
        logger.error(f"Email service test failed: {str(e)}")

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)