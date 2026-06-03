from sqlalchemy import (
    Column,
    Integer,
    String,
    Float
)

from app.database.base import Base


class StrategyRanking(Base):
    __tablename__ = "strategy_rankings"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    strategy_name = Column(
        String,
        nullable=False
    )

    rank_position = Column(
        Integer,
        nullable=False
    )

    rank_score = Column(
        Float,
        nullable=False
    )

    net_profit = Column(
        Float,
        default=0.0
    )

    profit_factor = Column(
        Float,
        default=0.0
    )

    max_drawdown = Column(
        Float,
        default=0.0
    )

    expectancy = Column(
        Float,
        default=0.0
    )

    average_risk_reward = Column(
        Float,
        default=0.0
    )