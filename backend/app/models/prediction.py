from sqlalchemy import Column, DateTime, Float, Integer, String

from app.database.base import Base


class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)

    symbol = Column(String, nullable=False)

    timeframe = Column(String, nullable=False)

    prediction = Column(String, nullable=False)

    confidence = Column(Float, nullable=False)

    predicted_at = Column(DateTime, nullable=False)
