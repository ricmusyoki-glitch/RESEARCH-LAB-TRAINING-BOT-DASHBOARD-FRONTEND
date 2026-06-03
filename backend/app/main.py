from fastapi import FastAPI
from sqlalchemy import text
from app.api.strategy_routes import router as strategy_router
from app.database.database import engine
from app.database.database import create_tables

from app.models import (
    Strategy,
    MarketData,
    MarketRegime,
    Signal,
    PaperTrade,
    TradeResult
) 

from app.api.market_data_routes import router as market_data_router
from app.api.market_regime_routes import router as market_regime_router 
from app.api.signal_routes import router as signal_router
from app.api.paper_trade_routes import router as paper_trade_router
from app.api.trade_result_routes import router as trade_result_router

app = FastAPI(
    title="Ric Research Lab"
)
app.include_router(strategy_router)
app.include_router(market_data_router) 
app.include_router(market_regime_router) 
app.include_router(signal_router) 
app.include_router(paper_trade_router)
app.include_router(trade_result_router)

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