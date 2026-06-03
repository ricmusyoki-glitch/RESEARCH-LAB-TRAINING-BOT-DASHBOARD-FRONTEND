from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.signal import (
    SignalCreate,
    SignalResponse
)

from app.services.signal_service import (
    create_signal,
    get_signals,
    get_signal_by_id,
    update_signal,
    delete_signal
)

router = APIRouter(
    prefix="/signals",
    tags=["Signals"]
)


@router.post(
    "/",
    response_model=SignalResponse
)
def create_signal_endpoint(
    signal: SignalCreate,
    db: Session = Depends(get_db)
):
    return create_signal(
        db=db,
        symbol=signal.symbol,
        timeframe=signal.timeframe,
        timestamp=signal.timestamp,
        direction=signal.direction,
        entry_price=signal.entry_price,
        stop_loss=signal.stop_loss,
        take_profit=signal.take_profit,
        confidence=signal.confidence,
        status=signal.status
    )


@router.get(
    "/",
    response_model=list[SignalResponse]
)
def get_signals_endpoint(
    db: Session = Depends(get_db)
):
    return get_signals(db) 

@router.get(
    "/{signal_id}",
    response_model=SignalResponse
)
def get_signal_by_id_endpoint(
    signal_id: int,
    db: Session = Depends(get_db)
):
    signal = get_signal_by_id(
        db,
        signal_id
    )

    if not signal:
        raise HTTPException(
            status_code=404,
            detail="Signal not found"
        )

    return signal 

@router.put(
    "/{signal_id}",
    response_model=SignalResponse
)
def update_signal_endpoint(
    signal_id: int,
    signal: SignalCreate,
    db: Session = Depends(get_db)
):
    updated_signal = update_signal(
        db=db,
        signal_id=signal_id,
        symbol=signal.symbol,
        timeframe=signal.timeframe,
        timestamp=signal.timestamp,
        direction=signal.direction,
        entry_price=signal.entry_price,
        stop_loss=signal.stop_loss,
        take_profit=signal.take_profit,
        confidence=signal.confidence,
        status=signal.status
    )

    if not updated_signal:
        raise HTTPException(
            status_code=404,
            detail="Signal not found"
        )

    return updated_signal

@router.delete(
    "/{signal_id}",
    response_model=SignalResponse
)
def delete_signal_endpoint(
    signal_id: int,
    db: Session = Depends(get_db)
):
    deleted_signal = delete_signal(
        db,
        signal_id
    )

    if not deleted_signal:
        raise HTTPException(
            status_code=404,
            detail="Signal not found"
        )

    return deleted_signal 