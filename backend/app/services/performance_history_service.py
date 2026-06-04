from sqlalchemy.orm import Session

from app.models.performance_history import (
    PerformanceHistory
)

from datetime import datetime

def create_performance_history(
    db: Session,
    strategy_name: str,
    net_profit: float,
    profit_factor: float,
    max_drawdown: float,
    rank_position: int,
    recorded_at: datetime
):
    history = PerformanceHistory(
        strategy_name=strategy_name,
        net_profit=net_profit,
        profit_factor=profit_factor,
        max_drawdown=max_drawdown,
        rank_position=rank_position,
        recorded_at=recorded_at
    )

    db.add(history)
    db.commit()
    db.refresh(history)

    return history


def get_performance_history(
    db: Session
):
    return (
        db.query(
            PerformanceHistory
        ).all()
    )

def get_performance_history_by_id(
    db: Session,
    history_id: int
):
    return (
        db.query(PerformanceHistory)
        .filter(
            PerformanceHistory.id == history_id
        )
        .first()
    )


def update_performance_history(
    db: Session,
    history_id: int,
    strategy_name: str,
    net_profit: float,
    profit_factor: float,
    max_drawdown: float,
    rank_position: int,
    recorded_at: datetime
):
    history = (
        db.query(PerformanceHistory)
        .filter(
            PerformanceHistory.id == history_id
        )
        .first()
    )

    if not history:
        return None

    history.strategy_name = strategy_name
    history.net_profit = net_profit
    history.profit_factor = profit_factor
    history.max_drawdown = max_drawdown
    history.rank_position = rank_position
    history.recorded_at = recorded_at

    db.commit()
    db.refresh(history)

    return history


def delete_performance_history(
    db: Session,
    history_id: int
):
    history = (
        db.query(PerformanceHistory)
        .filter(
            PerformanceHistory.id == history_id
        )
        .first()
    )

    if not history:
        return None

    db.delete(history)
    db.commit()

    return history