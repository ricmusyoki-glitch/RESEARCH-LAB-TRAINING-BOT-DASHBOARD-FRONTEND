from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.strategy import (StrategyCreate, StrategyResponse,
                                  StrategyUpdate)
from app.services.strategy_service import (create_strategy, delete_strategy,
                                           get_strategies, get_strategy_by_id,
                                           update_strategy)

router = APIRouter(prefix="/strategies", tags=["Strategies"])


@router.post("/", response_model=StrategyResponse)
def create_strategy_endpoint(strategy: StrategyCreate, db: Session = Depends(get_db)):
    return create_strategy(
        db=db,
        name=strategy.name,
        category=strategy.category,
        timeframe=strategy.timeframe,
    )


@router.get("/", response_model=list[StrategyResponse])
def get_strategies_endpoint(db: Session = Depends(get_db)):
    return get_strategies(db)


@router.get("/{strategy_id}", response_model=StrategyResponse)
def get_strategy_by_id_endpoint(strategy_id: int, db: Session = Depends(get_db)):
    strategy = get_strategy_by_id(db, strategy_id)

    if not strategy:
        raise HTTPException(status_code=404, detail="Strategy not found")

    return strategy


@router.put("/{strategy_id}", response_model=StrategyResponse)
def update_strategy_endpoint(
    strategy_id: int, strategy: StrategyUpdate, db: Session = Depends(get_db)
):
    updated_strategy = update_strategy(
        db=db,
        strategy_id=strategy_id,
        name=strategy.name,
        category=strategy.category,
        timeframe=strategy.timeframe,
    )

    if not updated_strategy:
        raise HTTPException(status_code=404, detail="Strategy not found")

    return updated_strategy


@router.delete("/{strategy_id}", response_model=StrategyResponse)
def delete_strategy_endpoint(strategy_id: int, db: Session = Depends(get_db)):
    deleted_strategy = delete_strategy(db, strategy_id)

    if not deleted_strategy:
        raise HTTPException(status_code=404, detail="Strategy not found")

    return deleted_strategy
