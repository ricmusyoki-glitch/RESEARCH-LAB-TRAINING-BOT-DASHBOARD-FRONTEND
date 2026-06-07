from pydantic import BaseModel


class StrategyRankingCreate(BaseModel):
    strategy_name: str

    rank_position: int

    rank_score: float

    net_profit: float

    profit_factor: float

    max_drawdown: float

    expectancy: float

    average_risk_reward: float


class StrategyRankingResponse(StrategyRankingCreate):
    id: int

    class Config:
        from_attributes = True
