from datetime import datetime

from pydantic import BaseModel


class EconomicEventCreate(BaseModel):
    event_name: str

    currency: str

    impact_level: str

    event_time: datetime

    description: str | None = None


class EconomicEventResponse(
    EconomicEventCreate
):
    id: int

    class Config:
        from_attributes = True