from datetime import datetime

from pydantic import BaseModel


class PaperTradeCreate(BaseModel):
    symbol: str

    timeframe: str

    direction: str

    entry_price: float

    stop_loss: float

    take_profit: float

    lot_size: float

    status: str

    pnl: float

    opened_at: datetime


class PaperTradeResponse(PaperTradeCreate):
    id: int

    class Config:
        from_attributes = True
