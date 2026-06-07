from sqlalchemy.orm import Session

from app.models.prediction import Prediction


def create_prediction(
    db: Session,
    symbol: str,
    timeframe: str,
    prediction: str,
    confidence: float,
    predicted_at,
):
    prediction_record = Prediction(
        symbol=symbol,
        timeframe=timeframe,
        prediction=prediction,
        confidence=confidence,
        predicted_at=predicted_at,
    )

    db.add(prediction_record)
    db.commit()
    db.refresh(prediction_record)

    return prediction_record


def get_predictions(db: Session):
    return db.query(Prediction).all()


def get_prediction_by_id(db: Session, prediction_id: int):
    return db.query(Prediction).filter(Prediction.id == prediction_id).first()


def update_prediction(
    db: Session,
    prediction_id: int,
    symbol: str,
    timeframe: str,
    prediction: str,
    confidence: float,
    predicted_at,
):
    prediction_record = (
        db.query(Prediction).filter(Prediction.id == prediction_id).first()
    )

    if not prediction_record:
        return None

    prediction_record.symbol = symbol
    prediction_record.timeframe = timeframe
    prediction_record.prediction = prediction
    prediction_record.confidence = confidence
    prediction_record.predicted_at = predicted_at

    db.commit()
    db.refresh(prediction_record)

    return prediction_record


def delete_prediction(db: Session, prediction_id: int):
    prediction_record = (
        db.query(Prediction).filter(Prediction.id == prediction_id).first()
    )

    if not prediction_record:
        return None

    db.delete(prediction_record)
    db.commit()

    return prediction_record
