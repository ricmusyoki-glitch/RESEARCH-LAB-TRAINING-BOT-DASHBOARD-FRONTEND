from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.strategy_performance import (StrategyPerformanceCreate,
                                              StrategyPerformanceResponse)
from app.services.strategy_performance_service import (
    create_strategy_performance, delete_strategy_performance,
    get_strategy_performance_by_id, get_strategy_performances,
    update_strategy_performance)

router = APIRouter(prefix="/strategy-performance", tags=["Strategy Performance"])


@router.post("/", response_model=StrategyPerformanceResponse)
def create_strategy_performance_endpoint(
    performance: StrategyPerformanceCreate, db: Session = Depends(get_db)
):
    return create_strategy_performance(
        db=db,
        strategy_name=performance.strategy_name,
        total_trades=performance.total_trades,
        wins=performance.wins,
        losses=performance.losses,
        win_rate=performance.win_rate,
        net_profit=performance.net_profit,
        average_win=performance.average_win,
        average_loss=performance.average_loss,
        profit_factor=performance.profit_factor,
        max_drawdown=performance.max_drawdown,
        expectancy=performance.expectancy,
        average_risk_reward=performance.average_risk_reward,
        rank_score=performance.rank_score,
    )


@router.get("/", response_model=list[StrategyPerformanceResponse])
def get_strategy_performances_endpoint(db: Session = Depends(get_db)):
    return get_strategy_performances(db)


@router.get("/{performance_id}", response_model=StrategyPerformanceResponse)
def get_strategy_performance_by_id_endpoint(
    performance_id: int, db: Session = Depends(get_db)
):
    performance = get_strategy_performance_by_id(db, performance_id)

    if not performance:
        raise HTTPException(status_code=404, detail="Strategy performance not found")

    return performance


@router.put("/{performance_id}", response_model=StrategyPerformanceResponse)
def update_strategy_performance_endpoint(
    performance_id: int,
    performance: StrategyPerformanceCreate,
    db: Session = Depends(get_db),
):
    updated_performance = update_strategy_performance(
        db=db,
        performance_id=performance_id,
        strategy_name=performance.strategy_name,
        total_trades=performance.total_trades,
        wins=performance.wins,
        losses=performance.losses,
        win_rate=performance.win_rate,
        net_profit=performance.net_profit,
        average_win=performance.average_win,
        average_loss=performance.average_loss,
        profit_factor=performance.profit_factor,
        max_drawdown=performance.max_drawdown,
        expectancy=performance.expectancy,
        average_risk_reward=performance.average_risk_reward,
        rank_score=performance.rank_score,
    )

    if not updated_performance:
        raise HTTPException(status_code=404, detail="Strategy performance not found")

    return updated_performance


@router.delete("/{performance_id}", response_model=StrategyPerformanceResponse)
def delete_strategy_performance_endpoint(
    performance_id: int, db: Session = Depends(get_db)
):
    deleted_performance = delete_strategy_performance(db, performance_id)

    if not deleted_performance:
        raise HTTPException(status_code=404, detail="Strategy performance not found")

    return deleted_performance
