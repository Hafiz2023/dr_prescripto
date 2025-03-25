from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Order
from schemas import OrderBase

router = APIRouter()

@router.post("/")
def place_order(order: OrderBase, db: Session = Depends(get_db)):
    new_order = Order(**order.dict())
    db.add(new_order)
    db.commit()
    return {"message": "Order placed successfully"}

@router.get("/")
def get_orders(db: Session = Depends(get_db)):
    return db.query(Order).all()

@router.get("/{order_id}")
def get_order(order_id: int, db: Session = Depends(get_db)):
    return db.query(Order).filter(Order.id == order_id).first()

@router.put("/{order_id}")
def update_order(order_id: int, order: OrderBase, db: Session = Depends(get_db)):
    db.query(Order).filter(Order.id == order_id).update(order.dict())
    db.commit()
    return {"message": "Order updated successfully"}

@router.delete("/{order_id}")
def delete_order(order_id: int, db: Session = Depends(get_db)):
    db.query(Order).filter(Order.id == order_id).delete()
    db.commit()
    return {"message": "Order deleted successfully"}

# The code above is a FastAPI route that allows users to place orders, get all orders, get a specific order, update an order, and delete an order. The route uses the Order model and OrderBase schema to interact with the database. The route is protected by a dependency that gets the database session.