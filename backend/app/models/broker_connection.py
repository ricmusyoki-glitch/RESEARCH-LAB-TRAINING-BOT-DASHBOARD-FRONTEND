from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime
)

from app.database.base import Base


class BrokerConnection(Base):
    __tablename__ = "broker_connections"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    broker_name = Column(
        String,
        nullable=False
    )

    server_name = Column(
        String,
        nullable=False
    )

    account_type = Column(
        String,
        nullable=False
    )

    connection_status = Column(
        String,
        nullable=False
    )

    last_sync = Column(
        DateTime,
        nullable=False
    )