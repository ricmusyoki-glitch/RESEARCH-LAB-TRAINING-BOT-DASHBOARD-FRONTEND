from datetime import time

from pydantic import BaseModel


class MarketSessionCreate(BaseModel):
    session_name: str

    start_time: time

    end_time: time

    liquidity_score: float

    is_overlap: str


class MarketSessionResponse(
    MarketSessionCreate
):
    id: int

    class Config:
        from_attributes = True