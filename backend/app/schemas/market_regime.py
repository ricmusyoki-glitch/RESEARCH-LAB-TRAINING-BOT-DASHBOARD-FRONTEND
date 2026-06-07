from datetime import datetime

from pydantic import BaseModel


class MarketRegimeCreate(BaseModel):
    symbol: str

    timeframe: str

    timestamp: datetime

    regime: str

    confidence: int


class MarketRegimeResponse(MarketRegimeCreate):
    id: int

    class Config:
        from_attributes = True
