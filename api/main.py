from fastapi import FastAPI, Form, UploadFile, File
from pydantic import BaseModel
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os

app = FastAPI()

# Pydantic model to handle the request data
class JobApplication(BaseModel):
    name: str
    email: str
    phone: str
    message: str

@app.post("/api/sendEmail")
async def send_email(application: JobApplication, resume: UploadFile = File(None)):
    # Email details
    sender_email = "your-email@gmail.com"
    receiver_email = "receiver-email@gmail.com"
    sender_password = "your-email-password"  # If using Gmail, use app password here

    # Email content
    subject = "New Job Application"
    body = f"""
    New Job Application:

    Name: {application.name}
    Email: {application.email}
    Phone: {application.phone}
    Message: {application.message}
    """

    # Setup the MIME
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = subject

    msg.attach(MIMEText(body, 'plain'))

    # If a resume is provided, attach it
    if resume:
        resume_data = resume.file.read()
        part = MIMEBase('application', 'octet-stream')
        part.set_payload(resume_data)
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', f"attachment; filename={resume.filename}")
        msg.attach(part)

    try:
        # Connect to Gmail SMTP server and send the email
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()
        
        return {"message": "Email sent successfully!"}
    except Exception as e:
        return {"message": f"Error sending email: {str(e)}"}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
    