"""
Tests for Donchian Breakout Strategy.

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

from app.strategy.strategies.donchian_breakout import (
    DonchianBreakoutStrategy,
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

    confidence_result = ConfidenceResult(
        success=True,
        confidence=confidence,
        reasons=[],
    )

    return MarketAnalysisResult(
        success=True,
        dxy_analysis=dxy,
        pair_analysis=pair,
        confidence_analysis=confidence_result,
        trade_ready=True,
    )


def breakout_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "time": [datetime.now()],
            "close": [120],
            "donchian_high": [120],
            "donchian_low": [80],
        }
    )


def breakdown_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "time": [datetime.now()],
            "close": [80],
            "donchian_high": [120],
            "donchian_low": [80],
        }
    )


def no_breakout_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "time": [datetime.now()],
            "close": [100],
            "donchian_high": [120],
            "donchian_low": [80],
        }
    )


def test_strategy_returns_score():

    strategy = (
        DonchianBreakoutStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        breakout_features(),
    )

    assert result.score >= 0


def test_strategy_name():

    strategy = (
        DonchianBreakoutStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        breakout_features(),
    )

    assert (
        result.strategy_name
        == "Donchian Breakout"
    )


def test_upper_breakout_scores():

    strategy = (
        DonchianBreakoutStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        breakout_features(),
    )

    assert result.score >= 80


def test_lower_breakout_scores():

    strategy = (
        DonchianBreakoutStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(
            bias="BEARISH",
        ),
        breakdown_features(),
    )

    assert result.score >= 80


def test_no_breakout_lower_score():

    strategy = (
        DonchianBreakoutStrategy()
    )

    breakout = strategy.evaluate(
        create_market_analysis(),
        breakout_features(),
    )

    normal = strategy.evaluate(
        create_market_analysis(),
        no_breakout_features(),
    )

    assert (
        breakout.score
        > normal.score
    )


def test_trending_regime_bonus():

    strategy = (
        DonchianBreakoutStrategy()
    )

    trending = strategy.evaluate(
        create_market_analysis(
            regime="TRENDING",
        ),
        breakout_features(),
    )

    ranging = strategy.evaluate(
        create_market_analysis(
            regime="RANGING",
        ),
        breakout_features(),
    )

    assert (
        trending.score
        > ranging.score
    )