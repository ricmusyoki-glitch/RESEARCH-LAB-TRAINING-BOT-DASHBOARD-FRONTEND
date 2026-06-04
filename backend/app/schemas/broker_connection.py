from datetime import datetime

from pydantic import BaseModel


class BrokerConnectionCreate(BaseModel):
    broker_name: str

    server_name: str

    account_type: str

    connection_status: str

    last_sync: datetime


class BrokerConnectionResponse(
    BrokerConnectionCreate
):
    id: int

    class Config:
        from_attributes = True