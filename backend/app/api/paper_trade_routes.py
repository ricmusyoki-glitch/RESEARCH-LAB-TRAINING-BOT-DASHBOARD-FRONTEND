from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.paper_trade import PaperTradeCreate, PaperTradeResponse
from app.services.paper_trade_service import (create_paper_trade,
                                              delete_paper_trade,
                                              get_paper_trade_by_id,
                                              get_paper_trades,
                                              update_paper_trade)

router = APIRouter(prefix="/paper-trades", tags=["Paper Trades"])


@router.post("/", response_model=PaperTradeResponse)
def create_paper_trade_endpoint(
    paper_trade: PaperTradeCreate, db: Session = Depends(get_db)
):
    return create_paper_trade(
        db=db,
        symbol=paper_trade.symbol,
        timeframe=paper_trade.timeframe,
        direction=paper_trade.direction,
        entry_price=paper_trade.entry_price,
        stop_loss=paper_trade.stop_loss,
        take_profit=paper_trade.take_profit,
        lot_size=paper_trade.lot_size,
        status=paper_trade.status,
        pnl=paper_trade.pnl,
        opened_at=paper_trade.opened_at,
    )


@router.get("/", response_model=list[PaperTradeResponse])
def get_paper_trades_endpoint(db: Session = Depends(get_db)):
    return get_paper_trades(db)


@router.get("/{paper_trade_id}", response_model=PaperTradeResponse)
def get_paper_trade_by_id_endpoint(paper_trade_id: int, db: Session = Depends(get_db)):
    paper_trade = get_paper_trade_by_id(db, paper_trade_id)

    if not paper_trade:
        raise HTTPException(status_code=404, detail="Paper trade not found")

    return paper_trade


@router.put("/{paper_trade_id}", response_model=PaperTradeResponse)
def update_paper_trade_endpoint(
    paper_trade_id: int, paper_trade: PaperTradeCreate, db: Session = Depends(get_db)
):
    updated_paper_trade = update_paper_trade(
        db=db,
        paper_trade_id=paper_trade_id,
        symbol=paper_trade.symbol,
        timeframe=paper_trade.timeframe,
        direction=paper_trade.direction,
        entry_price=paper_trade.entry_price,
        stop_loss=paper_trade.stop_loss,
        take_profit=paper_trade.take_profit,
        lot_size=paper_trade.lot_size,
        status=paper_trade.status,
        pnl=paper_trade.pnl,
        opened_at=paper_trade.opened_at,
    )

    if not updated_paper_trade:
        raise HTTPException(status_code=404, detail="Paper trade not found")

    return updated_paper_trade


@router.delete("/{paper_trade_id}", response_model=PaperTradeResponse)
def delete_paper_trade_endpoint(paper_trade_id: int, db: Session = Depends(get_db)):
    deleted_paper_trade = delete_paper_trade(db, paper_trade_id)

    if not deleted_paper_trade:
        raise HTTPException(status_code=404, detail="Paper trade not found")

    return deleted_paper_trade
