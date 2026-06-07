from sqlalchemy import Column, DateTime, Integer, String

from app.database.base import Base


class EconomicEvent(Base):
    __tablename__ = "economic_events"

    id = Column(Integer, primary_key=True, index=True)

    event_name = Column(String, nullable=False)

    currency = Column(String, nullable=False)

    impact_level = Column(String, nullable=False)

    event_time = Column(DateTime, nullable=False)

    description = Column(String, nullable=True)
