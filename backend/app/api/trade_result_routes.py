from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.trade_result import TradeResultCreate, TradeResultResponse
from app.services.trade_result_service import (create_trade_result,
                                               delete_trade_result,
                                               get_trade_result_by_id,
                                               get_trade_results,
                                               update_trade_result)

router = APIRouter(prefix="/trade-results", tags=["Trade Results"])


@router.post("/", response_model=TradeResultResponse)
def create_trade_result_endpoint(
    trade_result: TradeResultCreate, db: Session = Depends(get_db)
):
    return create_trade_result(
        db=db,
        symbol=trade_result.symbol,
        direction=trade_result.direction,
        entry_price=trade_result.entry_price,
        exit_price=trade_result.exit_price,
        profit_loss=trade_result.profit_loss,
        max_drawdown=trade_result.max_drawdown,
        result=trade_result.result,
        opened_at=trade_result.opened_at,
        closed_at=trade_result.closed_at,
    )


@router.get("/", response_model=list[TradeResultResponse])
def get_trade_results_endpoint(db: Session = Depends(get_db)):
    return get_trade_results(db)


@router.get("/{trade_result_id}", response_model=TradeResultResponse)
def get_trade_result_by_id_endpoint(
    trade_result_id: int, db: Session = Depends(get_db)
):
    trade_result = get_trade_result_by_id(db, trade_result_id)

    if not trade_result:
        raise HTTPException(status_code=404, detail="Trade result not found")

    return trade_result


@router.put("/{trade_result_id}", response_model=TradeResultResponse)
def update_trade_result_endpoint(
    trade_result_id: int, trade_result: TradeResultCreate, db: Session = Depends(get_db)
):
    updated_trade_result = update_trade_result(
        db=db,
        trade_result_id=trade_result_id,
        symbol=trade_result.symbol,
        direction=trade_result.direction,
        entry_price=trade_result.entry_price,
        exit_price=trade_result.exit_price,
        profit_loss=trade_result.profit_loss,
        max_drawdown=trade_result.max_drawdown,
        result=trade_result.result,
        opened_at=trade_result.opened_at,
        closed_at=trade_result.closed_at,
    )

    if not updated_trade_result:
        raise HTTPException(status_code=404, detail="Trade result not found")

    return updated_trade_result


@router.delete("/{trade_result_id}", response_model=TradeResultResponse)
def delete_trade_result_endpoint(trade_result_id: int, db: Session = Depends(get_db)):
    deleted_trade_result = delete_trade_result(db, trade_result_id)

    if not deleted_trade_result:
        raise HTTPException(status_code=404, detail="Trade result not found")

    return deleted_trade_result
