from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.telegram_notification import (TelegramNotificationCreate,
                                               TelegramNotificationResponse)
from app.services.telegram_notification_service import (
    create_telegram_notification, delete_telegram_notification,
    get_telegram_notification_by_id, get_telegram_notifications,
    update_telegram_notification)

router = APIRouter(prefix="/telegram-notifications", tags=["Telegram Notifications"])


@router.post("/", response_model=TelegramNotificationResponse)
def create_telegram_notification_endpoint(
    notification: TelegramNotificationCreate, db: Session = Depends(get_db)
):
    return create_telegram_notification(
        db=db,
        notification_type=notification.notification_type,
        message=notification.message,
        status=notification.status,
        sent_at=notification.sent_at,
    )


@router.get("/", response_model=list[TelegramNotificationResponse])
def get_telegram_notifications_endpoint(db: Session = Depends(get_db)):
    return get_telegram_notifications(db)


@router.get("/{notification_id}", response_model=TelegramNotificationResponse)
def get_telegram_notification_by_id_endpoint(
    notification_id: int, db: Session = Depends(get_db)
):
    notification = get_telegram_notification_by_id(db, notification_id)

    if not notification:
        raise HTTPException(status_code=404, detail="Telegram notification not found")

    return notification


@router.put("/{notification_id}", response_model=TelegramNotificationResponse)
def update_telegram_notification_endpoint(
    notification_id: int,
    notification: TelegramNotificationCreate,
    db: Session = Depends(get_db),
):
    updated_notification = update_telegram_notification(
        db=db,
        notification_id=notification_id,
        notification_type=notification.notification_type,
        message=notification.message,
        status=notification.status,
        sent_at=notification.sent_at,
    )

    if not updated_notification:
        raise HTTPException(status_code=404, detail="Telegram notification not found")

    return updated_notification


@router.delete("/{notification_id}", response_model=TelegramNotificationResponse)
def delete_telegram_notification_endpoint(
    notification_id: int, db: Session = Depends(get_db)
):
    deleted_notification = delete_telegram_notification(db, notification_id)

    if not deleted_notification:
        raise HTTPException(status_code=404, detail="Telegram notification not found")

    return deleted_notification
