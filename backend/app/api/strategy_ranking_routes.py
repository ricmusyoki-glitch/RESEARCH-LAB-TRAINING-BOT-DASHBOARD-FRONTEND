from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.strategy_ranking import (StrategyRankingCreate,
                                          StrategyRankingResponse)
from app.services.strategy_ranking_service import (create_strategy_ranking,
                                                   delete_strategy_ranking,
                                                   get_strategy_ranking_by_id,
                                                   get_strategy_rankings,
                                                   update_strategy_ranking)

router = APIRouter(prefix="/strategy-rankings", tags=["Strategy Rankings"])


@router.post("/", response_model=StrategyRankingResponse)
def create_strategy_ranking_endpoint(
    ranking: StrategyRankingCreate, db: Session = Depends(get_db)
):
    return create_strategy_ranking(
        db=db,
        strategy_name=ranking.strategy_name,
        rank_position=ranking.rank_position,
        rank_score=ranking.rank_score,
        net_profit=ranking.net_profit,
        profit_factor=ranking.profit_factor,
        max_drawdown=ranking.max_drawdown,
        expectancy=ranking.expectancy,
        average_risk_reward=ranking.average_risk_reward,
    )


@router.get("/", response_model=list[StrategyRankingResponse])
def get_strategy_rankings_endpoint(db: Session = Depends(get_db)):
    return get_strategy_rankings(db)


@router.get("/{ranking_id}", response_model=StrategyRankingResponse)
def get_strategy_ranking_by_id_endpoint(ranking_id: int, db: Session = Depends(get_db)):
    ranking = get_strategy_ranking_by_id(db, ranking_id)

    if not ranking:
        raise HTTPException(status_code=404, detail="Strategy ranking not found")

    return ranking


@router.put("/{ranking_id}", response_model=StrategyRankingResponse)
def update_strategy_ranking_endpoint(
    ranking_id: int, ranking: StrategyRankingCreate, db: Session = Depends(get_db)
):
    updated_ranking = update_strategy_ranking(
        db=db,
        ranking_id=ranking_id,
        strategy_name=ranking.strategy_name,
        rank_position=ranking.rank_position,
        rank_score=ranking.rank_score,
        net_profit=ranking.net_profit,
        profit_factor=ranking.profit_factor,
        max_drawdown=ranking.max_drawdown,
        expectancy=ranking.expectancy,
        average_risk_reward=ranking.average_risk_reward,
    )

    if not updated_ranking:
        raise HTTPException(status_code=404, detail="Strategy ranking not found")

    return updated_ranking


@router.delete("/{ranking_id}", response_model=StrategyRankingResponse)
def delete_strategy_ranking_endpoint(ranking_id: int, db: Session = Depends(get_db)):
    deleted_ranking = delete_strategy_ranking(db, ranking_id)

    if not deleted_ranking:
        raise HTTPException(status_code=404, detail="Strategy ranking not found")

    return deleted_ranking
