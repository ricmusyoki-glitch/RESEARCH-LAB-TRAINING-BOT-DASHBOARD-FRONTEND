from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.market_data import (
    MarketDataCreate,
    MarketDataResponse
)

from app.services.market_data_service import (
    create_market_data,
    get_market_data,
    get_market_data_by_id,
    update_market_data,
    delete_market_data
)

router = APIRouter(
    prefix="/market-data",
    tags=["Market Data"]
)


@router.post(
    "/",
    response_model=MarketDataResponse
)
def create_market_data_endpoint(
    market_data: MarketDataCreate,
    db: Session = Depends(get_db)
):
    return create_market_data(
        db=db,
        symbol=market_data.symbol,
        timeframe=market_data.timeframe,
        timestamp=market_data.timestamp,
        open=market_data.open,
        high=market_data.high,
        low=market_data.low,
        close=market_data.close,
        volume=market_data.volume,
        spread=market_data.spread
    )


@router.get(
    "/",
    response_model=list[MarketDataResponse]
)
def get_market_data_endpoint(
    db: Session = Depends(get_db)
):
    return get_market_data(db) 

@router.get(
    "/{market_data_id}",
    response_model=MarketDataResponse
)
def get_market_data_by_id_endpoint(
    market_data_id: int,
    db: Session = Depends(get_db)
):
    market_data = get_market_data_by_id(
        db,
        market_data_id
    )

    if not market_data:
        raise HTTPException(
            status_code=404,
            detail="Market data not found"
        )

    return market_data

@router.put(
    "/{market_data_id}",
    response_model=MarketDataResponse
)
def update_market_data_endpoint(
    market_data_id: int,
    market_data: MarketDataCreate,
    db: Session = Depends(get_db)
):
    updated_market_data = update_market_data(
        db=db,
        market_data_id=market_data_id,
        symbol=market_data.symbol,
        timeframe=market_data.timeframe,
        timestamp=market_data.timestamp,
        open=market_data.open,
        high=market_data.high,
        low=market_data.low,
        close=market_data.close,
        volume=market_data.volume,
        spread=market_data.spread
    )

    if not updated_market_data:
        raise HTTPException(
            status_code=404,
            detail="Market data not found"
        )

    return updated_market_data

@router.delete(
    "/{market_data_id}",
    response_model=MarketDataResponse
)
def delete_market_data_endpoint(
    market_data_id: int,
    db: Session = Depends(get_db)
):
    deleted_market_data = delete_market_data(
        db,
        market_data_id
    )

    if not deleted_market_data:
        raise HTTPException(
            status_code=404,
            detail="Market data not found"
        )

    return deleted_market_data