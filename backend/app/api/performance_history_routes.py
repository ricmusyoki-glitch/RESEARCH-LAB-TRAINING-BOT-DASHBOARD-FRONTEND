from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.performance_history import (
    PerformanceHistoryCreate,
    PerformanceHistoryResponse
)

from app.services.performance_history_service import (
    create_performance_history,
    get_performance_history,
    get_performance_history_by_id,
    update_performance_history,
    delete_performance_history
)

router = APIRouter(
    prefix="/performance-history",
    tags=["Performance History"]
)


@router.post(
    "/",
    response_model=PerformanceHistoryResponse
)
def create_performance_history_endpoint(
    history: PerformanceHistoryCreate,
    db: Session = Depends(get_db)
):
    return create_performance_history(
        db=db,
        strategy_name=history.strategy_name,
        net_profit=history.net_profit,
        profit_factor=history.profit_factor,
        max_drawdown=history.max_drawdown,
        rank_position=history.rank_position,
        recorded_at=history.recorded_at
    )


@router.get(
    "/",
    response_model=list[PerformanceHistoryResponse]
)
def get_performance_history_endpoint(
    db: Session = Depends(get_db)
):
    return get_performance_history(db)


@router.get(
    "/{history_id}",
    response_model=PerformanceHistoryResponse
)
def get_performance_history_by_id_endpoint(
    history_id: int,
    db: Session = Depends(get_db)
):
    history = get_performance_history_by_id(
        db,
        history_id
    )

    if not history:
        raise HTTPException(
            status_code=404,
            detail="Performance history not found"
        )

    return history

@router.put(
    "/{history_id}",
    response_model=PerformanceHistoryResponse
)
def update_performance_history_endpoint(
    history_id: int,
    history: PerformanceHistoryCreate,
    db: Session = Depends(get_db)
):
    updated_history = update_performance_history(
        db=db,
        history_id=history_id,
        strategy_name=history.strategy_name,
        net_profit=history.net_profit,
        profit_factor=history.profit_factor,
        max_drawdown=history.max_drawdown,
        rank_position=history.rank_position,
        recorded_at=history.recorded_at
    )

    if not updated_history:
        raise HTTPException(
            status_code=404,
            detail="Performance history not found"
        )

    return updated_history

@router.delete(
    "/{history_id}",
    response_model=PerformanceHistoryResponse
)
def delete_performance_history_endpoint(
    history_id: int,
    db: Session = Depends(get_db)
):
    deleted_history = delete_performance_history(
        db,
        history_id
    )

    if not deleted_history:
        raise HTTPException(
            status_code=404,
            detail="Performance history not found"
        )

    return deleted_history