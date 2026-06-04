from datetime import datetime

from sqlalchemy.orm import Session

from app.models.broker_connection import (
    BrokerConnection
)


def create_broker_connection(
    db: Session,
    broker_name: str,
    server_name: str,
    account_type: str,
    connection_status: str,
    last_sync: datetime
):
    connection = BrokerConnection(
        broker_name=broker_name,
        server_name=server_name,
        account_type=account_type,
        connection_status=connection_status,
        last_sync=last_sync
    )

    db.add(connection)
    db.commit()
    db.refresh(connection)

    return connection


def get_broker_connections(
    db: Session
):
    return (
        db.query(
            BrokerConnection
        ).all()
    )

def get_broker_connection_by_id(
    db: Session,
    connection_id: int
):
    return (
        db.query(BrokerConnection)
        .filter(
            BrokerConnection.id == connection_id
        )
        .first()
    )


def update_broker_connection(
    db: Session,
    connection_id: int,
    broker_name: str,
    server_name: str,
    account_type: str,
    connection_status: str,
    last_sync: datetime
):
    connection = (
        db.query(BrokerConnection)
        .filter(
            BrokerConnection.id == connection_id
        )
        .first()
    )

    if not connection:
        return None

    connection.broker_name = broker_name
    connection.server_name = server_name
    connection.account_type = account_type
    connection.connection_status = connection_status
    connection.last_sync = last_sync

    db.commit()
    db.refresh(connection)

    return connection


def delete_broker_connection(
    db: Session,
    connection_id: int
):
    connection = (
        db.query(BrokerConnection)
        .filter(
            BrokerConnection.id == connection_id
        )
        .first()
    )

    if not connection:
        return None

    db.delete(connection)
    db.commit()

    return connection 