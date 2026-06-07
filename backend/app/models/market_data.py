from sqlalchemy import Column, DateTime, Float, Integer, String

from app.database.base import Base


class MarketData(Base):
    __tablename__ = "market_data"

    id = Column(Integer, primary_key=True, index=True)

    symbol = Column(String, nullable=False)

    timeframe = Column(String, nullable=False)

    timestamp = Column(DateTime, nullable=False)

    open = Column(Float, nullable=False)

    high = Column(Float, nullable=False)

    low = Column(Float, nullable=False)

    close = Column(Float, nullable=False)

    volume = Column(Float, nullable=False)

    spread = Column(Float, nullable=False)
