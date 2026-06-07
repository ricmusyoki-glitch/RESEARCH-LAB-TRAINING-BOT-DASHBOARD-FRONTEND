from datetime import datetime

from pydantic import BaseModel


class PredictionCreate(BaseModel):
    symbol: str

    timeframe: str

    prediction: str

    confidence: float

    predicted_at: datetime


class PredictionResponse(PredictionCreate):
    id: int

    class Config:
        from_attributes = True
