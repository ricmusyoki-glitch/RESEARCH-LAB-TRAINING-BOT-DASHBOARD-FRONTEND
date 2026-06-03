from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime
)

from app.database.base import Base


class Signal(Base):
    __tablename__ = "signals"

    id = Column(Integer, primary_key=True, index=True)

    symbol = Column(String, nullable=False)

    timeframe = Column(String, nullable=False)

    timestamp = Column(DateTime, nullable=False)

    direction = Column(String, nullable=False)

    entry_price = Column(Float, nullable=False)

    stop_loss = Column(Float, nullable=False)

    take_profit = Column(Float, nullable=False)

    confidence = Column(Integer, nullable=False)

    status = Column(String, nullable=False)