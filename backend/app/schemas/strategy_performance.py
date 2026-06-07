from pydantic import BaseModel


class StrategyPerformanceCreate(BaseModel):
    strategy_name: str

    total_trades: int

    wins: int

    losses: int

    win_rate: float

    net_profit: float

    average_win: float

    average_loss: float

    profit_factor: float

    max_drawdown: float

    expectancy: float

    average_risk_reward: float

    rank_score: float


class StrategyPerformanceResponse(StrategyPerformanceCreate):
    id: int

    class Config:
        from_attributes = True
