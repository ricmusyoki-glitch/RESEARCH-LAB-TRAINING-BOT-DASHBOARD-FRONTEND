from sqlalchemy.orm import Session

from app.models.telegram_notification import TelegramNotification


def create_telegram_notification(
    db: Session, notification_type: str, message: str, status: str, sent_at
):
    notification = TelegramNotification(
        notification_type=notification_type,
        message=message,
        status=status,
        sent_at=sent_at,
    )

    db.add(notification)
    db.commit()
    db.refresh(notification)

    return notification


def get_telegram_notifications(db: Session):
    return db.query(TelegramNotification).all()


def get_telegram_notification_by_id(db: Session, notification_id: int):
    return (
        db.query(TelegramNotification)
        .filter(TelegramNotification.id == notification_id)
        .first()
    )


def update_telegram_notification(
    db: Session,
    notification_id: int,
    notification_type: str,
    message: str,
    status: str,
    sent_at,
):
    notification = (
        db.query(TelegramNotification)
        .filter(TelegramNotification.id == notification_id)
        .first()
    )

    if not notification:
        return None

    notification.notification_type = notification_type
    notification.message = message
    notification.status = status
    notification.sent_at = sent_at

    db.commit()
    db.refresh(notification)

    return notification


def delete_telegram_notification(db: Session, notification_id: int):
    notification = (
        db.query(TelegramNotification)
        .filter(TelegramNotification.id == notification_id)
        .first()
    )

    if not notification:
        return None

    db.delete(notification)
    db.commit()

    return notification
