from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.market_session import (
    MarketSessionCreate,
    MarketSessionResponse
)

from app.services.market_session_service import (
    create_market_session,
    get_market_sessions,
    get_market_session_by_id,
    update_market_session,
    delete_market_session
)

router = APIRouter(
    prefix="/market-sessions",
    tags=["Market Sessions"]
)


@router.post(
    "/",
    response_model=MarketSessionResponse
)
def create_market_session_endpoint(
    market_session: MarketSessionCreate,
    db: Session = Depends(get_db)
):
    return create_market_session(
        db=db,
        session_name=market_session.session_name,
        start_time=market_session.start_time,
        end_time=market_session.end_time,
        liquidity_score=market_session.liquidity_score,
        is_overlap=market_session.is_overlap
    )


@router.get(
    "/",
    response_model=list[MarketSessionResponse]
)
def get_market_sessions_endpoint(
    db: Session = Depends(get_db)
):
    return get_market_sessions(db)

@router.get(
    "/{session_id}",
    response_model=MarketSessionResponse
)
def get_market_session_by_id_endpoint(
    session_id: int,
    db: Session = Depends(get_db)
):
    session = get_market_session_by_id(
        db,
        session_id
    )

    if not session:
        raise HTTPException(
            status_code=404,
            detail="Market session not found"
        )

    return session

@router.put(
    "/{session_id}",
    response_model=MarketSessionResponse
)
def update_market_session_endpoint(
    session_id: int,
    market_session: MarketSessionCreate,
    db: Session = Depends(get_db)
):
    updated_session = update_market_session(
        db=db,
        session_id=session_id,
        session_name=market_session.session_name,
        start_time=market_session.start_time,
        end_time=market_session.end_time,
        liquidity_score=market_session.liquidity_score,
        is_overlap=market_session.is_overlap
    )

    if not updated_session:
        raise HTTPException(
            status_code=404,
            detail="Market session not found"
        )

    return updated_session

@router.delete(
    "/{session_id}",
    response_model=MarketSessionResponse
)
def delete_market_session_endpoint(
    session_id: int,
    db: Session = Depends(get_db)
):
    deleted_session = delete_market_session(
        db,
        session_id
    )

    if not deleted_session:
        raise HTTPException(
            status_code=404,
            detail="Market session not found"
        )

    return deleted_session 