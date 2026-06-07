from sqlalchemy import Column, Float, Integer, String

from app.database.base import Base


class StrategyPerformance(Base):
    __tablename__ = "strategy_performance"

    id = Column(Integer, primary_key=True, index=True)

    strategy_name = Column(String, nullable=False)

    total_trades = Column(Integer, default=0)

    wins = Column(Integer, default=0)

    losses = Column(Integer, default=0)

    win_rate = Column(Float, default=0.0)

    net_profit = Column(Float, default=0.0)

    average_win = Column(Float, default=0.0)

    average_loss = Column(Float, default=0.0)

    profit_factor = Column(Float, default=0.0)

    max_drawdown = Column(Float, default=0.0)

    expectancy = Column(Float, default=0.0)

    average_risk_reward = Column(Float, default=0.0)

    rank_score = Column(Float, default=0.0)
