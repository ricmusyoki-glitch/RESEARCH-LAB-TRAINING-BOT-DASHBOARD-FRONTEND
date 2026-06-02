from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.strategy import (
    StrategyCreate,
    StrategyResponse
)
from app.services.strategy_service import (
    create_strategy,
    get_strategies,
    get_strategy_by_id

)

router = APIRouter(
    prefix="/strategies",
    tags=["Strategies"]
)


@router.post(
    "/",
    response_model=StrategyResponse
)
def create_strategy_endpoint(
    strategy: StrategyCreate,
    db: Session = Depends(get_db)
):
    return create_strategy(
        db=db,
        name=strategy.name,
        category=strategy.category,
        timeframe=strategy.timeframe
    )


@router.get(
    "/",
    response_model=list[StrategyResponse]
)
def get_strategies_endpoint(
    db: Session = Depends(get_db)
):
    return get_strategies(db) 
@router.get(
    "/{strategy_id}",
    response_model=StrategyResponse
)
def get_strategy_by_id_endpoint(
    strategy_id: int,
    db: Session = Depends(get_db)
):
    strategy = get_strategy_by_id(
        db,
        strategy_id
    )

    if not strategy:
        raise HTTPException(
            status_code=404,
            detail="Strategy not found"
        )

    return strategy