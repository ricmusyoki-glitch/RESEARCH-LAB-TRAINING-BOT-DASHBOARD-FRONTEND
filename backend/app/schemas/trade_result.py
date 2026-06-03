from datetime import datetime

from pydantic import BaseModel


class TradeResultCreate(BaseModel):
    symbol: str

    direction: str

    entry_price: float

    exit_price: float

    profit_loss: float

    max_drawdown: float

    result: str

    opened_at: datetime

    closed_at: datetime


class TradeResultResponse(TradeResultCreate):
    id: int

    class Config:
        from_attributes = True 