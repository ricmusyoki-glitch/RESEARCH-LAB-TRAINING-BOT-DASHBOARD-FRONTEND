from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.broker_connection import (BrokerConnectionCreate,
                                           BrokerConnectionResponse)
from app.services.broker_connection_service import (
    create_broker_connection, delete_broker_connection,
    get_broker_connection_by_id, get_broker_connections,
    update_broker_connection)

router = APIRouter(prefix="/broker-connections", tags=["Broker Connections"])


@router.post("/", response_model=BrokerConnectionResponse)
def create_broker_connection_endpoint(
    connection: BrokerConnectionCreate, db: Session = Depends(get_db)
):
    return create_broker_connection(
        db=db,
        broker_name=connection.broker_name,
        server_name=connection.server_name,
        account_type=connection.account_type,
        connection_status=connection.connection_status,
        last_sync=connection.last_sync,
    )


@router.get("/", response_model=list[BrokerConnectionResponse])
def get_broker_connections_endpoint(db: Session = Depends(get_db)):
    return get_broker_connections(db)


@router.get("/{connection_id}", response_model=BrokerConnectionResponse)
def get_broker_connection_by_id_endpoint(
    connection_id: int, db: Session = Depends(get_db)
):
    connection = get_broker_connection_by_id(db, connection_id)

    if not connection:
        raise HTTPException(status_code=404, detail="Broker connection not found")

    return connection


@router.put("/{connection_id}", response_model=BrokerConnectionResponse)
def update_broker_connection_endpoint(
    connection_id: int,
    connection: BrokerConnectionCreate,
    db: Session = Depends(get_db),
):
    updated_connection = update_broker_connection(
        db=db,
        connection_id=connection_id,
        broker_name=connection.broker_name,
        server_name=connection.server_name,
        account_type=connection.account_type,
        connection_status=connection.connection_status,
        last_sync=connection.last_sync,
    )

    if not updated_connection:
        raise HTTPException(status_code=404, detail="Broker connection not found")

    return updated_connection


@router.delete("/{connection_id}", response_model=BrokerConnectionResponse)
def delete_broker_connection_endpoint(
    connection_id: int, db: Session = Depends(get_db)
):
    deleted_connection = delete_broker_connection(db, connection_id)

    if not deleted_connection:
        raise HTTPException(status_code=404, detail="Broker connection not found")

    return deleted_connection
