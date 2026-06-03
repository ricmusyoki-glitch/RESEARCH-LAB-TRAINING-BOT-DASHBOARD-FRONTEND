from sqlalchemy import (
    Column,
    Integer,
    String,
    Time,
    Float
)

from app.database.base import Base


class MarketSession(Base):
    __tablename__ = "market_sessions"

    id = Column(Integer, primary_key=True, index=True)

    session_name = Column(String, nullable=False)

    start_time = Column(Time, nullable=False)

    end_time = Column(Time, nullable=False)

    liquidity_score = Column(Float, default=0.0)

    is_overlap = Column(String, default="NO")