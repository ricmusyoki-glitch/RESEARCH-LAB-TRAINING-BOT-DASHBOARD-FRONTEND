from sqlalchemy import Column, Integer, String, Float, Boolean

from app.database.base import Base


class Strategy(Base):
    __tablename__ = "strategies"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    category = Column(String, nullable=False)

    timeframe = Column(String, nullable=False)

    win_rate = Column(Float, default=0.0)

    active = Column(Boolean, default=True) 