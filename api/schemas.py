from pydantic import BaseModel

class UserBase(BaseModel):
    name: str
    email: str

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class PrescriptionBase(BaseModel):
    medicine_name: str
    dosage: str

class OrderBase(BaseModel):
    prescription_id: int
    price: float

class OrderCreate(OrderBase):
    pass 

class User(UserBase):
    id: int
    class Config:
        orm_mode = True

class Prescription(PrescriptionBase):
    id: int
    user_id: int
    class Config:
        orm_mode = True 

class Order(OrderBase):
    id: int
    user_id: int
    status: str
    is_delivered: bool
    class Config:
        orm_mode = True
        
# Removed duplicate definition of OrderCreate

class OrderUpdate(BaseModel):
    status: str
    is_delivered: bool
    class Config:
        orm_mode = True
        
# Removed duplicate definition of OrderUpdate

# Removed duplicate definition of OrderCreate

# Removed duplicate definition of PrescriptionCreate

# Removed duplicate definition of PrescriptionUpdate

class PrescriptionCreate(PrescriptionBase):
    pass

class PrescriptionUpdate(PrescriptionBase):
    pass