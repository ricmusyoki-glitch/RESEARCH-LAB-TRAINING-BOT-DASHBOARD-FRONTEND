from sqlalchemy.orm import Session

from app.models.market_regime import MarketRegime


def create_market_regime(
    db: Session, symbol: str, timeframe: str, timestamp, regime: str, confidence: int
):
    market_regime = MarketRegime(
        symbol=symbol,
        timeframe=timeframe,
        timestamp=timestamp,
        regime=regime,
        confidence=confidence,
    )

    db.add(market_regime)
    db.commit()
    db.refresh(market_regime)

    return market_regime


def get_market_regimes(db: Session):
    return db.query(MarketRegime).all()


def get_market_regime_by_id(db: Session, market_regime_id: int):
    return db.query(MarketRegime).filter(MarketRegime.id == market_regime_id).first()


def update_market_regime(
    db: Session,
    market_regime_id: int,
    symbol: str,
    timeframe: str,
    timestamp,
    regime: str,
    confidence: int,
):
    market_regime = (
        db.query(MarketRegime).filter(MarketRegime.id == market_regime_id).first()
    )

    if not market_regime:
        return None

    market_regime.symbol = symbol
    market_regime.timeframe = timeframe
    market_regime.timestamp = timestamp
    market_regime.regime = regime
    market_regime.confidence = confidence

    db.commit()
    db.refresh(market_regime)

    return market_regime


def delete_market_regime(db: Session, market_regime_id: int):
    market_regime = (
        db.query(MarketRegime).filter(MarketRegime.id == market_regime_id).first()
    )

    if not market_regime:
        return None

    db.delete(market_regime)
    db.commit()

    return market_regime
