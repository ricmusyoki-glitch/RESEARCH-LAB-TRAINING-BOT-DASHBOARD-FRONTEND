from sqlalchemy import Column, DateTime, Float, Integer, String

from app.database.base import Base


class TradeResult(Base):
    __tablename__ = "trade_results"

    id = Column(Integer, primary_key=True, index=True)

    symbol = Column(String, nullable=False)

    direction = Column(String, nullable=False)

    entry_price = Column(Float, nullable=False)

    exit_price = Column(Float, nullable=False)

    profit_loss = Column(Float, nullable=False)

    max_drawdown = Column(Float, nullable=False)

    result = Column(String, nullable=False)

    opened_at = Column(DateTime, nullable=False)

    closed_at = Column(DateTime, nullable=False)
