from sqlalchemy.orm import Session

from app.models.signal import Signal


def create_signal(
    db: Session,
    symbol: str,
    timeframe: str,
    timestamp,
    direction: str,
    entry_price: float,
    stop_loss: float,
    take_profit: float,
    confidence: int,
    status: str
):
    signal = Signal(
        symbol=symbol,
        timeframe=timeframe,
        timestamp=timestamp,
        direction=direction,
        entry_price=entry_price,
        stop_loss=stop_loss,
        take_profit=take_profit,
        confidence=confidence,
        status=status
    )

    db.add(signal)
    db.commit()
    db.refresh(signal)

    return signal


def get_signals(db: Session):
    return db.query(Signal).all()

def get_signal_by_id(
    db: Session,
    signal_id: int
):
    return (
        db.query(Signal)
        .filter(Signal.id == signal_id)
        .first()
    )


def update_signal(
    db: Session,
    signal_id: int,
    symbol: str,
    timeframe: str,
    timestamp,
    direction: str,
    entry_price: float,
    stop_loss: float,
    take_profit: float,
    confidence: int,
    status: str
):
    signal = (
        db.query(Signal)
        .filter(Signal.id == signal_id)
        .first()
    )

    if not signal:
        return None

    signal.symbol = symbol
    signal.timeframe = timeframe
    signal.timestamp = timestamp
    signal.direction = direction
    signal.entry_price = entry_price
    signal.stop_loss = stop_loss
    signal.take_profit = take_profit
    signal.confidence = confidence
    signal.status = status

    db.commit()
    db.refresh(signal)

    return signal


def delete_signal(
    db: Session,
    signal_id: int
):
    signal = (
        db.query(Signal)
        .filter(Signal.id == signal_id)
        .first()
    )

    if not signal:
        return None

    db.delete(signal)
    db.commit()

    return signal