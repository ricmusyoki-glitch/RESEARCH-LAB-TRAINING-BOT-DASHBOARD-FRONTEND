from sqlalchemy import Column, DateTime, Float, Integer, String

from app.database.base import Base


class PerformanceHistory(Base):
    __tablename__ = "performance_history"

    id = Column(Integer, primary_key=True, index=True)

    strategy_name = Column(String, nullable=False)

    net_profit = Column(Float, default=0.0)

    profit_factor = Column(Float, default=0.0)

    max_drawdown = Column(Float, default=0.0)

    rank_position = Column(Integer, nullable=False)

    recorded_at = Column(DateTime, nullable=False)
