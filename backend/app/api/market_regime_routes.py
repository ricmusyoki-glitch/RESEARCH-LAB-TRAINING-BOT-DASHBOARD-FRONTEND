from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.market_regime import MarketRegimeCreate, MarketRegimeResponse
from app.services.market_regime_service import (create_market_regime,
                                                delete_market_regime,
                                                get_market_regime_by_id,
                                                get_market_regimes,
                                                update_market_regime)

router = APIRouter(prefix="/market-regimes", tags=["Market Regimes"])


@router.post("/", response_model=MarketRegimeResponse)
def create_market_regime_endpoint(
    market_regime: MarketRegimeCreate, db: Session = Depends(get_db)
):
    return create_market_regime(
        db=db,
        symbol=market_regime.symbol,
        timeframe=market_regime.timeframe,
        timestamp=market_regime.timestamp,
        regime=market_regime.regime,
        confidence=market_regime.confidence,
    )


@router.get("/", response_model=list[MarketRegimeResponse])
def get_market_regimes_endpoint(db: Session = Depends(get_db)):
    return get_market_regimes(db)


@router.get("/{market_regime_id}", response_model=MarketRegimeResponse)
def get_market_regime_by_id_endpoint(
    market_regime_id: int, db: Session = Depends(get_db)
):
    market_regime = get_market_regime_by_id(db, market_regime_id)

    if not market_regime:
        raise HTTPException(status_code=404, detail="Market regime not found")

    return market_regime


@router.put("/{market_regime_id}", response_model=MarketRegimeResponse)
def update_market_regime_endpoint(
    market_regime_id: int,
    market_regime: MarketRegimeCreate,
    db: Session = Depends(get_db),
):
    updated_market_regime = update_market_regime(
        db=db,
        market_regime_id=market_regime_id,
        symbol=market_regime.symbol,
        timeframe=market_regime.timeframe,
        timestamp=market_regime.timestamp,
        regime=market_regime.regime,
        confidence=market_regime.confidence,
    )

    if not updated_market_regime:
        raise HTTPException(status_code=404, detail="Market regime not found")

    return updated_market_regime


@router.delete("/{market_regime_id}", response_model=MarketRegimeResponse)
def delete_market_regime_endpoint(market_regime_id: int, db: Session = Depends(get_db)):
    deleted_market_regime = delete_market_regime(db, market_regime_id)

    if not deleted_market_regime:
        raise HTTPException(status_code=404, detail="Market regime not found")

    return deleted_market_regime
