from sqlalchemy.orm import Session

from app.models.strategy import Strategy


def create_strategy(
    db: Session,
    name: str,
    category: str,
    timeframe: str
):
    strategy = Strategy(
        name=name,
        category=category,
        timeframe=timeframe
    )

    db.add(strategy)
    db.commit()
    db.refresh(strategy)

    return strategy


def get_strategies(db: Session):
    return db.query(Strategy).all()