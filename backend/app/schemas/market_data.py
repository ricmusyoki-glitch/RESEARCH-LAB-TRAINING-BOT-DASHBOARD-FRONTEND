from datetime import datetime

from pydantic import BaseModel


class MarketDataCreate(BaseModel):
    symbol: str
    timeframe: str
    timestamp: datetime

    open: float
    high: float
    low: float
    close: float

    volume: float
    spread: float


class MarketDataResponse(MarketDataCreate):
    id: int

    class Config:
        from_attributes = True
