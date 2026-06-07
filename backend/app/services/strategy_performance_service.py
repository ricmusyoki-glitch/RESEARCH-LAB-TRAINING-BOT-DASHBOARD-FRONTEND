from sqlalchemy.orm import Session

from app.models.strategy_performance import StrategyPerformance


def create_strategy_performance(
    db: Session,
    strategy_name: str,
    total_trades: int,
    wins: int,
    losses: int,
    win_rate: float,
    net_profit: float,
    average_win: float,
    average_loss: float,
    profit_factor: float,
    max_drawdown: float,
    expectancy: float,
    average_risk_reward: float,
    rank_score: float,
):
    performance = StrategyPerformance(
        strategy_name=strategy_name,
        total_trades=total_trades,
        wins=wins,
        losses=losses,
        win_rate=win_rate,
        net_profit=net_profit,
        average_win=average_win,
        average_loss=average_loss,
        profit_factor=profit_factor,
        max_drawdown=max_drawdown,
        expectancy=expectancy,
        average_risk_reward=average_risk_reward,
        rank_score=rank_score,
    )

    db.add(performance)
    db.commit()
    db.refresh(performance)

    return performance


def get_strategy_performances(db: Session):
    return db.query(StrategyPerformance).all()


def get_strategy_performance_by_id(db: Session, performance_id: int):
    return (
        db.query(StrategyPerformance)
        .filter(StrategyPerformance.id == performance_id)
        .first()
    )


def update_strategy_performance(
    db: Session,
    performance_id: int,
    strategy_name: str,
    total_trades: int,
    wins: int,
    losses: int,
    win_rate: float,
    net_profit: float,
    average_win: float,
    average_loss: float,
    profit_factor: float,
    max_drawdown: float,
    expectancy: float,
    average_risk_reward: float,
    rank_score: float,
):
    performance = (
        db.query(StrategyPerformance)
        .filter(StrategyPerformance.id == performance_id)
        .first()
    )

    if not performance:
        return None

    performance.strategy_name = strategy_name
    performance.total_trades = total_trades
    performance.wins = wins
    performance.losses = losses
    performance.win_rate = win_rate
    performance.net_profit = net_profit
    performance.average_win = average_win
    performance.average_loss = average_loss
    performance.profit_factor = profit_factor
    performance.max_drawdown = max_drawdown
    performance.expectancy = expectancy
    performance.average_risk_reward = average_risk_reward
    performance.rank_score = rank_score

    db.commit()
    db.refresh(performance)

    return performance


def delete_strategy_performance(db: Session, performance_id: int):
    performance = (
        db.query(StrategyPerformance)
        .filter(StrategyPerformance.id == performance_id)
        .first()
    )

    if not performance:
        return None

    db.delete(performance)
    db.commit()

    return performance
