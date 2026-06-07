from sqlalchemy.orm import Session

from app.models.paper_trade import PaperTrade


def create_paper_trade(
    db: Session,
    symbol: str,
    timeframe: str,
    direction: str,
    entry_price: float,
    stop_loss: float,
    take_profit: float,
    lot_size: float,
    status: str,
    pnl: float,
    opened_at,
):
    paper_trade = PaperTrade(
        symbol=symbol,
        timeframe=timeframe,
        direction=direction,
        entry_price=entry_price,
        stop_loss=stop_loss,
        take_profit=take_profit,
        lot_size=lot_size,
        status=status,
        pnl=pnl,
        opened_at=opened_at,
    )

    db.add(paper_trade)
    db.commit()
    db.refresh(paper_trade)

    return paper_trade


def get_paper_trades(db: Session):
    return db.query(PaperTrade).all()


def get_paper_trade_by_id(db: Session, paper_trade_id: int):
    return db.query(PaperTrade).filter(PaperTrade.id == paper_trade_id).first()


def update_paper_trade(
    db: Session,
    paper_trade_id: int,
    symbol: str,
    timeframe: str,
    direction: str,
    entry_price: float,
    stop_loss: float,
    take_profit: float,
    lot_size: float,
    status: str,
    pnl: float,
    opened_at,
):
    paper_trade = db.query(PaperTrade).filter(PaperTrade.id == paper_trade_id).first()

    if not paper_trade:
        return None

    paper_trade.symbol = symbol
    paper_trade.timeframe = timeframe
    paper_trade.direction = direction
    paper_trade.entry_price = entry_price
    paper_trade.stop_loss = stop_loss
    paper_trade.take_profit = take_profit
    paper_trade.lot_size = lot_size
    paper_trade.status = status
    paper_trade.pnl = pnl
    paper_trade.opened_at = opened_at

    db.commit()
    db.refresh(paper_trade)

    return paper_trade


def delete_paper_trade(db: Session, paper_trade_id: int):
    paper_trade = db.query(PaperTrade).filter(PaperTrade.id == paper_trade_id).first()

    if not paper_trade:
        return None

    db.delete(paper_trade)
    db.commit()

    return paper_trade
