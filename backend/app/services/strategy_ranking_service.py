from sqlalchemy.orm import Session

from app.models.strategy_ranking import (
    StrategyRanking
)


def create_strategy_ranking(
    db: Session,
    strategy_name: str,
    rank_position: int,
    rank_score: float,
    net_profit: float,
    profit_factor: float,
    max_drawdown: float,
    expectancy: float,
    average_risk_reward: float
):
    ranking = StrategyRanking(
        strategy_name=strategy_name,
        rank_position=rank_position,
        rank_score=rank_score,
        net_profit=net_profit,
        profit_factor=profit_factor,
        max_drawdown=max_drawdown,
        expectancy=expectancy,
        average_risk_reward=average_risk_reward
    )

    db.add(ranking)
    db.commit()
    db.refresh(ranking)

    return ranking


def get_strategy_rankings(
    db: Session
):
    return (
        db.query(
            StrategyRanking
        ).all()
    )

def get_strategy_ranking_by_id(
    db: Session,
    ranking_id: int
):
    return (
        db.query(StrategyRanking)
        .filter(
            StrategyRanking.id == ranking_id
        )
        .first()
    )


def update_strategy_ranking(
    db: Session,
    ranking_id: int,
    strategy_name: str,
    rank_position: int,
    rank_score: float,
    net_profit: float,
    profit_factor: float,
    max_drawdown: float,
    expectancy: float,
    average_risk_reward: float
):
    ranking = (
        db.query(StrategyRanking)
        .filter(
            StrategyRanking.id == ranking_id
        )
        .first()
    )

    if not ranking:
        return None

    ranking.strategy_name = strategy_name
    ranking.rank_position = rank_position
    ranking.rank_score = rank_score
    ranking.net_profit = net_profit
    ranking.profit_factor = profit_factor
    ranking.max_drawdown = max_drawdown
    ranking.expectancy = expectancy
    ranking.average_risk_reward = average_risk_reward

    db.commit()
    db.refresh(ranking)

    return ranking


def delete_strategy_ranking(
    db: Session,
    ranking_id: int
):
    ranking = (
        db.query(StrategyRanking)
        .filter(
            StrategyRanking.id == ranking_id
        )
        .first()
    )

    if not ranking:
        return None

    db.delete(ranking)
    db.commit()

    return ranking