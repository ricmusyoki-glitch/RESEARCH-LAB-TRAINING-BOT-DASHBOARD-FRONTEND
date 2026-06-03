from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.economic_event import (
    EconomicEventCreate,
    EconomicEventResponse
)

from app.services.economic_event_service import (
    create_economic_event,
    get_economic_events,
    get_economic_event_by_id,
    update_economic_event,
    delete_economic_event
)

router = APIRouter(
    prefix="/economic-events",
    tags=["Economic Events"]
)


@router.post(
    "/",
    response_model=EconomicEventResponse
)
def create_economic_event_endpoint(
    event: EconomicEventCreate,
    db: Session = Depends(get_db)
):
    return create_economic_event(
        db=db,
        event_name=event.event_name,
        currency=event.currency,
        impact_level=event.impact_level,
        event_time=event.event_time,
        description=event.description
    )


@router.get(
    "/",
    response_model=list[EconomicEventResponse]
)
def get_economic_events_endpoint(
    db: Session = Depends(get_db)
):
    return get_economic_events(db)

@router.get(
    "/{event_id}",
    response_model=EconomicEventResponse
)
def get_economic_event_by_id_endpoint(
    event_id: int,
    db: Session = Depends(get_db)
):
    event = get_economic_event_by_id(
        db,
        event_id
    )

    if not event:
        raise HTTPException(
            status_code=404,
            detail="Economic event not found"
        )

    return event

@router.put(
    "/{event_id}",
    response_model=EconomicEventResponse
)
def update_economic_event_endpoint(
    event_id: int,
    event: EconomicEventCreate,
    db: Session = Depends(get_db)
):
    updated_event = update_economic_event(
        db=db,
        event_id=event_id,
        event_name=event.event_name,
        currency=event.currency,
        impact_level=event.impact_level,
        event_time=event.event_time,
        description=event.description
    )

    if not updated_event:
        raise HTTPException(
            status_code=404,
            detail="Economic event not found"
        )

    return updated_event 

@router.delete(
    "/{event_id}",
    response_model=EconomicEventResponse
)
def delete_economic_event_endpoint(
    event_id: int,
    db: Session = Depends(get_db)
):
    deleted_event = delete_economic_event(
        db,
        event_id
    )

    if not deleted_event:
        raise HTTPException(
            status_code=404,
            detail="Economic event not found"
        )

    return deleted_event