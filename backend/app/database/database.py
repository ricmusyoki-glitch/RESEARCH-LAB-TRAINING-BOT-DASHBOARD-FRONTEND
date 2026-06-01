from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import settings


engine = create_engine(
    settings.DATABASE_URL,
    echo=True
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
) 

from app.database.base import Base
from app.models.strategy import Strategy

def create_tables():
    Base.metadata.create_all(bind=engine) 