from sqlalchemy.orm import Session

from app.models.market_session import MarketSession


def create_market_session(
    db: Session,
    session_name: str,
    start_time,
    end_time,
    liquidity_score: float,
    is_overlap: str,
):
    session = MarketSession(
        session_name=session_name,
        start_time=start_time,
        end_time=end_time,
        liquidity_score=liquidity_score,
        is_overlap=is_overlap,
    )

    db.add(session)
    db.commit()
    db.refresh(session)

    return session


def get_market_sessions(db: Session):
    return db.query(MarketSession).all()


def get_market_session_by_id(db: Session, session_id: int):
    return db.query(MarketSession).filter(MarketSession.id == session_id).first()


def update_market_session(
    db: Session,
    session_id: int,
    session_name: str,
    start_time,
    end_time,
    liquidity_score: float,
    is_overlap: str,
):
    session = db.query(MarketSession).filter(MarketSession.id == session_id).first()

    if not session:
        return None

    session.session_name = session_name
    session.start_time = start_time
    session.end_time = end_time
    session.liquidity_score = liquidity_score
    session.is_overlap = is_overlap

    db.commit()
    db.refresh(session)

    return session


def delete_market_session(db: Session, session_id: int):
    session = db.query(MarketSession).filter(MarketSession.id == session_id).first()

    if not session:
        return None

    db.delete(session)
    db.commit()

    return session
