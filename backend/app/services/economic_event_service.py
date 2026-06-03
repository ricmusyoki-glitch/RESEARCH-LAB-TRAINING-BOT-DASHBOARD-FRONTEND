from sqlalchemy.orm import Session

from app.models.economic_event import (
    EconomicEvent
)


def create_economic_event(
    db: Session,
    event_name: str,
    currency: str,
    impact_level: str,
    event_time,
    description: str | None = None
):
    event = EconomicEvent(
        event_name=event_name,
        currency=currency,
        impact_level=impact_level,
        event_time=event_time,
        description=description
    )

    db.add(event)
    db.commit()
    db.refresh(event)

    return event


def get_economic_events(
    db: Session
):
    return (
        db.query(
            EconomicEvent
        ).all()
    )

def get_economic_event_by_id(
    db: Session,
    event_id: int
):
    return (
        db.query(EconomicEvent)
        .filter(
            EconomicEvent.id == event_id
        )
        .first()
    )


def update_economic_event(
    db: Session,
    event_id: int,
    event_name: str,
    currency: str,
    impact_level: str,
    event_time,
    description: str | None = None
):
    event = (
        db.query(EconomicEvent)
        .filter(
            EconomicEvent.id == event_id
        )
        .first()
    )

    if not event:
        return None

    event.event_name = event_name
    event.currency = currency
    event.impact_level = impact_level
    event.event_time = event_time
    event.description = description

    db.commit()
    db.refresh(event)

    return event


def delete_economic_event(
    db: Session,
    event_id: int
):
    event = (
        db.query(EconomicEvent)
        .filter(
            EconomicEvent.id == event_id
        )
        .first()
    )

    if not event:
        return None

    db.delete(event)
    db.commit()

    return event