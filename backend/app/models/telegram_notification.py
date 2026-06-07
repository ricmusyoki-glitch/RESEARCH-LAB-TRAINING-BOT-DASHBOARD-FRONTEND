from sqlalchemy import Column, DateTime, Integer, String

from app.database.base import Base


class TelegramNotification(Base):
    __tablename__ = "telegram_notifications"

    id = Column(Integer, primary_key=True, index=True)

    notification_type = Column(String, nullable=False)

    message = Column(String, nullable=False)

    status = Column(String, nullable=False)

    sent_at = Column(DateTime, nullable=False)
