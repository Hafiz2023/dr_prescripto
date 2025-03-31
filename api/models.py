from sqlalchemy import Column, Engine, Integer, String, ForeignKey, Float, Boolean
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)

class Prescription(Base):
    __tablename__ = "prescriptions"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    medicine_name = Column(String, nullable=False)
    dosage = Column(String, nullable=False)

class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    prescription_id = Column(Integer, ForeignKey("prescriptions.id"))
    price = Column(Float, nullable=False)
    status = Column(String, default="Pending")
    is_delivered = Column(Boolean, default=False)
    user = relationship("User", back_populates="orders")
    prescription = relationship("Prescription", back_populates="orders")

    def __repr__(self):
        return f"<Order id={self.id} price={self.price} status={self.status} is_delivered={self.is_delivered}>"
    
User.orders = relationship("Order", back_populates="user")
Prescription.orders = relationship("Order", back_populates="prescription")

Base.metadata.create_all(bind=Engine)   
