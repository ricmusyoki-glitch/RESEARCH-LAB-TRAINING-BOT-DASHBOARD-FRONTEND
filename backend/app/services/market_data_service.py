from sqlalchemy.orm import Session

from app.models.market_data import MarketData


def create_market_data(
    db: Session,
    symbol: str,
    timeframe: str,
    timestamp,
    open: float,
    high: float,
    low: float,
    close: float,
    volume: float,
    spread: float
):
    market_data = MarketData(
        symbol=symbol,
        timeframe=timeframe,
        timestamp=timestamp,
        open=open,
        high=high,
        low=low,
        close=close,
        volume=volume,
        spread=spread
    )

    db.add(market_data)
    db.commit()
    db.refresh(market_data)

    return market_data


def get_market_data(db: Session):
    return db.query(MarketData).all() 

def get_market_data_by_id(
    db: Session,
    market_data_id: int
):
    return (
        db.query(MarketData)
        .filter(MarketData.id == market_data_id)
        .first()
    )


def update_market_data(
    db: Session,
    market_data_id: int,
    symbol: str,
    timeframe: str,
    timestamp,
    open: float,
    high: float,
    low: float,
    close: float,
    volume: float,
    spread: float
):
    market_data = (
        db.query(MarketData)
        .filter(MarketData.id == market_data_id)
        .first()
    )

    if not market_data:
        return None

    market_data.symbol = symbol
    market_data.timeframe = timeframe
    market_data.timestamp = timestamp
    market_data.open = open
    market_data.high = high
    market_data.low = low
    market_data.close = close
    market_data.volume = volume
    market_data.spread = spread

    db.commit()
    db.refresh(market_data)

    return market_data


def delete_market_data(
    db: Session,
    market_data_id: int
):
    market_data = (
        db.query(MarketData)
        .filter(MarketData.id == market_data_id)
        .first()
    )

    if not market_data:
        return None

    db.delete(market_data)
    db.commit()

    return market_data