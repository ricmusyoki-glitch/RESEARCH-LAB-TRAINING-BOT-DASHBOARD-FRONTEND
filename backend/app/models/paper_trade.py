from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime
)

from app.database.base import Base


class PaperTrade(Base):
    __tablename__ = "paper_trades"

    id = Column(Integer, primary_key=True, index=True)

    symbol = Column(String, nullable=False)

    timeframe = Column(String, nullable=False)

    direction = Column(String, nullable=False)

    entry_price = Column(Float, nullable=False)

    stop_loss = Column(Float, nullable=False)

    take_profit = Column(Float, nullable=False)

    lot_size = Column(Float, nullable=False)

    status = Column(String, nullable=False)

    pnl = Column(Float, default=0.0)

    opened_at = Column(DateTime, nullable=False)