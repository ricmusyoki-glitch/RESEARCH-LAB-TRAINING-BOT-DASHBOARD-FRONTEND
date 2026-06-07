from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.prediction import PredictionCreate, PredictionResponse
from app.services.prediction_service import (create_prediction,
                                             delete_prediction,
                                             get_prediction_by_id,
                                             get_predictions,
                                             update_prediction)

router = APIRouter(prefix="/predictions", tags=["Predictions"])


@router.post("/", response_model=PredictionResponse)
def create_prediction_endpoint(
    prediction: PredictionCreate, db: Session = Depends(get_db)
):
    return create_prediction(
        db=db,
        symbol=prediction.symbol,
        timeframe=prediction.timeframe,
        prediction=prediction.prediction,
        confidence=prediction.confidence,
        predicted_at=prediction.predicted_at,
    )


@router.get("/", response_model=list[PredictionResponse])
def get_predictions_endpoint(db: Session = Depends(get_db)):
    return get_predictions(db)


@router.get("/{prediction_id}", response_model=PredictionResponse)
def get_prediction_by_id_endpoint(prediction_id: int, db: Session = Depends(get_db)):
    prediction_record = get_prediction_by_id(db, prediction_id)

    if not prediction_record:
        raise HTTPException(status_code=404, detail="Prediction not found")

    return prediction_record


@router.put("/{prediction_id}", response_model=PredictionResponse)
def update_prediction_endpoint(
    prediction_id: int, prediction: PredictionCreate, db: Session = Depends(get_db)
):
    updated_prediction = update_prediction(
        db=db,
        prediction_id=prediction_id,
        symbol=prediction.symbol,
        timeframe=prediction.timeframe,
        prediction=prediction.prediction,
        confidence=prediction.confidence,
        predicted_at=prediction.predicted_at,
    )

    if not updated_prediction:
        raise HTTPException(status_code=404, detail="Prediction not found")

    return updated_prediction


@router.delete("/{prediction_id}", response_model=PredictionResponse)
def delete_prediction_endpoint(prediction_id: int, db: Session = Depends(get_db)):
    deleted_prediction = delete_prediction(db, prediction_id)

    if not deleted_prediction:
        raise HTTPException(status_code=404, detail="Prediction not found")

    return deleted_prediction
