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
    TradeResult,
    StrategyPerformance,
    StrategyRanking,
    MarketSession,
    EconomicEvent,
    Prediction,
    TelegramNotification,
    PerformanceHistory
) 

from app.api.market_data_routes import (router as market_data_router)
from app.api.market_regime_routes import (router as market_regime_router )
from app.api.signal_routes import (router as signal_router)
from app.api.paper_trade_routes import (router as paper_trade_router)
from app.api.trade_result_routes import (router as trade_result_router)
from app.api.strategy_performance_routes import (router as strategy_performance_router)
from app.api.strategy_ranking_routes import (router as strategy_ranking_router)
from app.api.market_session_routes import (router as market_session_router)
from app.api.economic_event_routes import (router as economic_event_router)
from app.api.prediction_routes import (router as prediction_router)
from app.api.telegram_notification_routes import (router as telegram_notification_router)
from app.api.performance_history_routes import (router as performance_history_router)

app = FastAPI(
    title="Ric Research Lab"
)
app.include_router(strategy_router)
app.include_router(market_data_router) 
app.include_router(market_regime_router) 
app.include_router(signal_router) 
app.include_router(paper_trade_router)
app.include_router(trade_result_router) 
app.include_router(strategy_performance_router)
app.include_router(strategy_ranking_router) 
app.include_router( market_session_router)
app.include_router(economic_event_router)
app.include_router(prediction_router) 
app.include_router(telegram_notification_router)
app.include_router(performance_history_router) 

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