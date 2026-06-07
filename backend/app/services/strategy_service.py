from sqlalchemy.orm import Session

from app.models.strategy import Strategy


def create_strategy(db: Session, name: str, category: str, timeframe: str):
    strategy = Strategy(name=name, category=category, timeframe=timeframe)

    db.add(strategy)
    db.commit()
    db.refresh(strategy)

    return strategy


def get_strategies(db: Session):
    return db.query(Strategy).all()


def get_strategy_by_id(db: Session, strategy_id: int):
    return db.query(Strategy).filter(Strategy.id == strategy_id).first()


def update_strategy(
    db: Session, strategy_id: int, name: str, category: str, timeframe: str
):
    strategy = db.query(Strategy).filter(Strategy.id == strategy_id).first()

    if not strategy:
        return None

    strategy.name = name
    strategy.category = category
    strategy.timeframe = timeframe

    db.commit()
    db.refresh(strategy)

    return strategy


def delete_strategy(db: Session, strategy_id: int):
    strategy = db.query(Strategy).filter(Strategy.id == strategy_id).first()

    if not strategy:
        return None

    db.delete(strategy)
    db.commit()

    return strategy
