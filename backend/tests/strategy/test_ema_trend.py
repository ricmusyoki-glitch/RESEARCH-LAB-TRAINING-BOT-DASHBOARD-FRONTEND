"""
Tests for EMA Trend Following Strategy.

Author: Rick Research Lab
"""

from datetime import datetime

import pandas as pd

from app.core.models import (
    ConfidenceResult,
    DXYAnalysisResult,
    MarketAnalysisResult,
    PairAnalysisResult,
    TimeframeAnalysis,
)

from app.strategy.strategies.ema_trend import (
    EmaTrendFollowingStrategy,
)


def create_market_analysis(
    confidence: float = 90,
    bias: str = "BULLISH",
    regime: str = "TRENDING",
) -> MarketAnalysisResult:

    timeframe = TimeframeAnalysis(
        timeframe="H4",
        bias=bias,
        regime=regime,
        confidence=confidence,
    )

    dxy = DXYAnalysisResult(
        success=True,
        weekly=timeframe,
        daily=timeframe,
        h4=timeframe,
        h1=TimeframeAnalysis(
            timeframe="N/A",
            bias="N/A",
            regime="N/A",
            confidence=0,
        ),
        dollar_strength=80,
    )

    pair = PairAnalysisResult(
        success=True,
        pair="EURUSD",
        daily=timeframe,
        h4=timeframe,
        h1=timeframe,
        m15=timeframe,
        overall_bias=bias,
        confidence=confidence,
    )

    confidence_result = (
        ConfidenceResult(
            success=True,
            confidence=confidence,
            reasons=[],
        )
    )

    return MarketAnalysisResult(
        success=True,
        dxy_analysis=dxy,
        pair_analysis=pair,
        confidence_analysis=confidence_result,
        trade_ready=True,
    )


def bullish_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "time": [datetime.now()],
            "ema_20": [110],
            "ema_50": [105],
            "ema_200": [100],
        }
    )


def bearish_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "time": [datetime.now()],
            "ema_20": [100],
            "ema_50": [105],
            "ema_200": [110],
        }
    )


def test_strategy_returns_score():

    strategy = (
        EmaTrendFollowingStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        bullish_features(),
    )

    assert result.score >= 0


def test_strategy_name():

    strategy = (
        EmaTrendFollowingStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        bullish_features(),
    )

    assert (
        result.strategy_name
        == "EMA Trend Following"
    )


def test_bullish_alignment_scores():

    strategy = (
        EmaTrendFollowingStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        bullish_features(),
    )

    assert result.score >= 75


def test_bearish_alignment_scores():

    strategy = (
        EmaTrendFollowingStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(
            bias="BEARISH",
        ),
        bearish_features(),
    )

    assert result.score >= 75


def test_trending_regime_bonus():

    strategy = (
        EmaTrendFollowingStrategy()
    )

    trending = strategy.evaluate(
        create_market_analysis(
            regime="TRENDING",
        ),
        bullish_features(),
    )

    ranging = strategy.evaluate(
        create_market_analysis(
            regime="RANGING",
        ),
        bullish_features(),
    )

    assert (
        trending.score
        > ranging.score
    )


def test_high_confidence_bonus():

    strategy = (
        EmaTrendFollowingStrategy()
    )

    high = strategy.evaluate(
        create_market_analysis(
            confidence=90,
        ),
        bullish_features(),
    )

    low = strategy.evaluate(
        create_market_analysis(
            confidence=40,
        ),
        bullish_features(),
    )

    assert (
        high.score
        > low.score
    )