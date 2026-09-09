from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import date

from database import SessionLocal
from models import Trip as TripModel
from fastapi import HTTPException
from models import Trip as TripModel, Booking as BookingModel

app = FastAPI(title="ATLAS Backend")


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to ATLAS Backend"
    }


@app.get("/health")
def health():
    return {
        "status": "ATLAS backend is running"
    }


class Trip(BaseModel):
    destination: str
    country: str
    image: str | None = None
    startDate: date
    endDate: date
    days: int
    travelers: int
    budget: float
    status: str = "Planned"
    progress: int = 0

class BookingCreate(BaseModel):
    reference: str
    title: str
    booking_type: str
    image: str | None = None
    booking_date: date | None = None
    amount: float
    travelers: int
    status: str = "upcoming"
    trip_id: int | None = None

@app.post("/bookings")
def create_booking(booking: BookingCreate):
    db = SessionLocal()

    try:
        new_booking = BookingModel(
            reference=booking.reference,
            title=booking.title,
            booking_type=booking.booking_type,
            image=booking.image,
            booking_date=booking.booking_date,
            amount=booking.amount,
            travelers=booking.travelers,
            status=booking.status,
            trip_id=booking.trip_id
        )

        db.add(new_booking)
        db.commit()
        db.refresh(new_booking)

        return {
            "message": "Booking created successfully",
            "booking": {
                "id": new_booking.id,
                "reference": new_booking.reference,
                "title": new_booking.title,
                "booking_type": new_booking.booking_type,
                "image": new_booking.image,
                "booking_date": new_booking.booking_date,
                "amount": new_booking.amount,
                "travelers": new_booking.travelers,
                "status": new_booking.status,
                "trip_id": new_booking.trip_id
            }
        }

    finally:
        db.close()

    
@app.get("/bookings")
def get_bookings():
    db = SessionLocal()

    try:
        bookings = db.query(BookingModel).all()

        return {
            "bookings": [
                {
                    "id": booking.id,
                    "reference": booking.reference,
                    "title": booking.title,
                    "booking_type": booking.booking_type,
                    "image": booking.image,
                    "booking_date": booking.booking_date,
                    "amount": booking.amount,
                    "travelers": booking.travelers,
                    "status": booking.status,
                    "trip_id": booking.trip_id
                }
                for booking in bookings
            ]
        }

    finally:
        db.close()

@app.get("/bookings/{booking_id}")
def get_booking(booking_id: int):
    db = SessionLocal()

    try:
        booking = db.query(BookingModel).filter(
            BookingModel.id == booking_id
        ).first()

        if not booking:
            raise HTTPException(
                status_code=404,
                detail="Booking not found"
            )

        return {
            "booking": {
                "id": booking.id,
                "reference": booking.reference,
                "title": booking.title,
                "booking_type": booking.booking_type,
                "image": booking.image,
                "booking_date": booking.booking_date,
                "amount": booking.amount,
                "travelers": booking.travelers,
                "status": booking.status,
                "trip_id": booking.trip_id
            }
        }

    finally:
        db.close()

@app.delete("/bookings/{booking_id}")
def delete_booking(booking_id: int):
    db = SessionLocal()

    try:
        booking = db.query(BookingModel).filter(
            BookingModel.id == booking_id
        ).first()

        if not booking:
            raise HTTPException(
                status_code=404,
                detail="Booking not found"
            )

        db.delete(booking)
        db.commit()

        return {
            "message": "Booking deleted successfully",
            "booking_id": booking_id
        }
    finally:
        db.close()
@app.put("/bookings/{booking_id}/cancel")
def cancel_booking(booking_id: int):
    db = SessionLocal()

    try:
        booking = db.query(BookingModel).filter(
            BookingModel.id == booking_id
        ).first()

        if not booking:
            raise HTTPException(
                status_code=404,
                detail="Booking not found"
            )

        booking.status = "cancelled"

        db.commit()
        db.refresh(booking)

        return {
            "message": "Booking cancelled successfully",
            "booking": {
                "id": booking.id,
                "reference": booking.reference,
                "title": booking.title,
                "status": booking.status
            }
        }

    finally:
        db.close()
    
                                
@app.post("/trips")
def create_trip(trip: Trip):
    db = SessionLocal()

    try:
        new_trip = TripModel(
            destination=trip.destination,
            country=trip.country,
            image=trip.image,
            startDate=trip.startDate,
            endDate=trip.endDate,
            days=trip.days,
            travelers=trip.travelers,
            budget=trip.budget,
            status=trip.status,
            progress=trip.progress
        )

        db.add(new_trip)
        db.commit()
        db.refresh(new_trip)

        return {
            "message": "Trip created successfully",
            "trip": {
                "id": new_trip.id,
                "destination": new_trip.destination,
                "country": new_trip.country,
                "image": new_trip.image,
                "startDate": new_trip.startDate,
                "endDate": new_trip.endDate,
                "days": new_trip.days,
                "travelers": new_trip.travelers,
                "budget": new_trip.budget,
                "status": new_trip.status,
                "progress": new_trip.progress
            }
        }

    finally:
        db.close()

@app.get("/trips/{trip_id}")
def get_trip(trip_id: int):
    db = SessionLocal()

    try:
        trip = db.query(TripModel).filter(TripModel.id == trip_id).first()

        if not trip:
            return {
                "message": "Trip not found"
            }

        return {
            "trip": {
                "id": trip.id,
                "destination": trip.destination,
                "country": trip.country,
                "image": trip.image,
                "startDate": trip.startDate,
                "endDate": trip.endDate,
                "days": trip.days,
                "travelers": trip.travelers,
                "budget": trip.budget,
                "status": trip.status,
                "progress": trip.progress
            }
        }

    finally:
        db.close()
@app.get("/trips")
def get_trips():
    db = SessionLocal()

    try:
        trips = db.query(TripModel).all()

        return {
            "trips": [
                {
                    "id": trip.id,
                    "destination": trip.destination,
                    "country": trip.country,
                    "image": trip.image,
                    "startDate": trip.startDate,
                    "endDate": trip.endDate,
                    "days": trip.days,
                    "travelers": trip.travelers,
                    "budget": trip.budget,
                    "status": trip.status,
                    "progress": trip.progress
                }
                for trip in trips
            ]
        }

    finally:
        db.close()
class TripUpdate(BaseModel):
    destination: str | None = None
    country: str | None = None
    image: str | None = None
    startDate: date | None = None
    endDate: date | None = None
    days: int | None = None
    travelers: int | None = None
    budget: float | None = None
    status: str | None = None
    progress: int | None = None


@app.put("/trips/{trip_id}")
def update_trip(trip_id: int, trip_data: TripUpdate):
    db = SessionLocal()

    try:
        trip = db.query(TripModel).filter(TripModel.id == trip_id).first()

        if not trip:
            raise HTTPException(status_code=404, detail="Trip not found")

        update_data = trip_data.model_dump(exclude_unset=True)

        for field, value in update_data.items():
            setattr(trip, field, value)

        db.commit()
        db.refresh(trip)

        return {
            "message": "Trip updated successfully",
            "trip": {
                "id": trip.id,
                "destination": trip.destination,
                "country": trip.country,
                "image": trip.image,
                "startDate": trip.startDate,
                "endDate": trip.endDate,
                "days": trip.days,
                "travelers": trip.travelers,
                "budget": trip.budget,
                "status": trip.status,
                "progress": trip.progress
            }
        }

    finally:
        db.close()
@app.delete("/trips/{trip_id}")
def delete_trip(trip_id: int):
    db = SessionLocal()

    try:
        trip = db.query(TripModel).filter(TripModel.id == trip_id).first()

        if not trip:
            raise HTTPException(status_code=404, detail="Trip not found")

        db.delete(trip)
        db.commit()

        return {
            "message": "Trip deleted successfully",
            "trip_id": trip_id
        }

    finally:
        db.close()        