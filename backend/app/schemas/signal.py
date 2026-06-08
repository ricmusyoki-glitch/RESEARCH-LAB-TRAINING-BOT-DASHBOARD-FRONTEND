from datetime import datetime

from pydantic import BaseModel


class SignalCreate(BaseModel):
    symbol: str

    timeframe: str

    timestamp: datetime

    direction: str

    entry_price: float

    stop_loss: float

    take_profit: float

    confidence: int

    status: str

    analysis_summary: str | None = None


class SignalResponse(SignalCreate):
    id: int

    class Config:
        from_attributes = True
