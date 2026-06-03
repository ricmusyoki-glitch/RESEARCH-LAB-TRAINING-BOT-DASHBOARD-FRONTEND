from sqlalchemy.orm import Session

from app.models.trade_result import TradeResult


def create_trade_result(
    db: Session,
    symbol: str,
    direction: str,
    entry_price: float,
    exit_price: float,
    profit_loss: float,
    max_drawdown: float,
    result: str,
    opened_at,
    closed_at
):
    trade_result = TradeResult(
        symbol=symbol,
        direction=direction,
        entry_price=entry_price,
        exit_price=exit_price,
        profit_loss=profit_loss,
        max_drawdown=max_drawdown,
        result=result,
        opened_at=opened_at,
        closed_at=closed_at
    )

    db.add(trade_result)
    db.commit()
    db.refresh(trade_result)

    return trade_result


def get_trade_results(db: Session):
    return db.query(TradeResult).all()

def get_trade_result_by_id(
    db: Session,
    trade_result_id: int
):
    return (
        db.query(TradeResult)
        .filter(TradeResult.id == trade_result_id)
        .first()
    )


def update_trade_result(
    db: Session,
    trade_result_id: int,
    symbol: str,
    direction: str,
    entry_price: float,
    exit_price: float,
    profit_loss: float,
    max_drawdown: float,
    result: str,
    opened_at,
    closed_at
):
    trade_result = (
        db.query(TradeResult)
        .filter(TradeResult.id == trade_result_id)
        .first()
    )

    if not trade_result:
        return None

    trade_result.symbol = symbol
    trade_result.direction = direction
    trade_result.entry_price = entry_price
    trade_result.exit_price = exit_price
    trade_result.profit_loss = profit_loss
    trade_result.max_drawdown = max_drawdown
    trade_result.result = result
    trade_result.opened_at = opened_at
    trade_result.closed_at = closed_at

    db.commit()
    db.refresh(trade_result)

    return trade_result


def delete_trade_result(
    db: Session,
    trade_result_id: int
):
    trade_result = (
        db.query(TradeResult)
        .filter(TradeResult.id == trade_result_id)
        .first()
    )

    if not trade_result:
        return None

    db.delete(trade_result)
    db.commit()

    return trade_result