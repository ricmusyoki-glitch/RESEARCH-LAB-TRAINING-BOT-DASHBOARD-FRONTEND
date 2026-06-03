from sqlalchemy import Column, Integer, String, DateTime

from app.database.base import Base


class MarketRegime(Base):
    __tablename__ = "market_regimes"

    id = Column(Integer, primary_key=True, index=True)

    symbol = Column(String, nullable=False)

    timeframe = Column(String, nullable=False)

    timestamp = Column(DateTime, nullable=False)

    regime = Column(String, nullable=False)

    confidence = Column(Integer, nullable=False) 