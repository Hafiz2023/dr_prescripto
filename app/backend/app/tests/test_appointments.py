from app import schemas

def test_create_appointment(client):
    appointment_data = {
        "is_first_visit": True,
        "name": "John Doe",
        "contact_number": "1234567890",
        "email": "john@example.com",
        "address": "123 Main St",
        "specialty_type": "medical",
        "medical_department": "Cardiology Clinic"
    }
    response = client.post("/api/v1/appointments/", json=appointment_data)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == appointment_data["name"]
    assert "id" in data

def test_get_appointment(client):
    # First create an appointment
    appointment_data = {
        "is_first_visit": False,
        "name": "Jane Smith",
        "contact_number": "9876543210",
        "email": "jane@example.com",
        "address": "456 Oak Ave",
        "specialty_type": "surgical",
        "medical_department": "Orthodontics"
    }
    create_response = client.post("/api/v1/appointments/", json=appointment_data)
    appointment_id = create_response.json()["id"]
    
    # Now retrieve it
    response = client.get(f"/api/v1/appointments/{appointment_id}")
    assert response.status_code == 200
    data = response.json()
    assert data["id"] == appointment_id
    assert data["name"] == appointment_data["name"]

def test_get_appointments(client):
    # Create some test appointments
    for i in range(3):
        client.post("/api/v1/appointments/", json={
            "is_first_visit": i % 2 == 0,
            "name": f"Patient {i}",
            "contact_number": f"123456789{i}",
            "email": f"patient{i}@example.com",
            "address": f"{i} Test Street",
            "specialty_type": "medical" if i % 2 == 0 else "surgical",
            "medical_department": "Cardiology Clinic" if i % 2 == 0 else "Orthodontics"
        })
    
    response = client.get("/api/v1/appointments/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 3
    assert all("id" in item for item in data)