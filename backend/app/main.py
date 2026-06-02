from fastapi import FastAPI
from sqlalchemy import text
from app.api.strategy_routes import router as strategy_router
from app.database.database import engine
from app.database.database import create_tables
from app.models import Strategy 

app = FastAPI(
    title="Rick Research Lab"
)
app.include_router(strategy_router)

@app.on_event("startup")
def startup():
    create_tables() 

@app.get("/")
def root():
    return {
        "message": "Backend Running"
    }


@app.get("/health/db")
def db_health():

    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    return {
        "database": "connected"
    } 