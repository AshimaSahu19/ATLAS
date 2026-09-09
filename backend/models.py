from sqlalchemy import Column, Integer, String, Float, Date
from database import Base


class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)

    destination = Column(String, nullable=False)
    country = Column(String, nullable=True)
    image = Column(String, nullable=True)

    startDate = Column(Date, nullable=True)
    endDate = Column(Date, nullable=True)

    days = Column(Integer, nullable=False)
    travelers = Column(Integer, nullable=False)
    budget = Column(Float, nullable=False)

    status = Column(String, nullable=False, default="Planned")
    progress = Column(Integer, nullable=False, default=0)

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)

    # Booking details
    reference = Column(String, unique=True, nullable=False)
    title = Column(String, nullable=False)
    booking_type = Column(String, nullable=False)

    image = Column(String, nullable=True)
    booking_date = Column(Date, nullable=True)

    amount = Column(Float, nullable=False)
    travelers = Column(Integer, nullable=False)

    status = Column(String, nullable=False, default="upcoming")

    # Optional connection with a trip
    trip_id = Column(Integer, nullable=True)