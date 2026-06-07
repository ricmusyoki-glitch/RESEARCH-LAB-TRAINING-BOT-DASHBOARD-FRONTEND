from datetime import datetime

from pydantic import BaseModel


class TelegramNotificationCreate(BaseModel):
    notification_type: str

    message: str

    status: str

    sent_at: datetime


class TelegramNotificationResponse(TelegramNotificationCreate):
    id: int

    class Config:
        from_attributes = True
