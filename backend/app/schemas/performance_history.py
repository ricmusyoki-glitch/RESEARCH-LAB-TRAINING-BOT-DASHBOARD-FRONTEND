from datetime import datetime

from pydantic import BaseModel


class PerformanceHistoryCreate(BaseModel):
    strategy_name: str

    net_profit: float

    profit_factor: float

    max_drawdown: float

    rank_position: int

    recorded_at: datetime


class PerformanceHistoryResponse(
    PerformanceHistoryCreate
):
    id: int

    class Config:
        from_attributes = True