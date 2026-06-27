"""
Tests for Volatility Spike Reversal Strategy.

Author: Rick Research Lab
"""

import pandas as pd

from app.core.models import (
    ConfidenceResult,
    DXYAnalysisResult,
    MarketAnalysisResult,
    PairAnalysisResult,
    TimeframeAnalysis,
)

from app.strategy.strategies.volatility_reversal import (
    VolatilityReversalStrategy,
)


def create_market_analysis(
    confidence: float = 90,
    regime: str = "VOLATILE",
) -> MarketAnalysisResult:

    timeframe = TimeframeAnalysis(
        timeframe="H4",
        bias="BULLISH",
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
        overall_bias="BULLISH",
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


def overbought_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "rsi": [85],
            "atr_expanding": [True],
        }
    )


def oversold_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "rsi": [15],
            "atr_expanding": [True],
        }
    )


def neutral_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "rsi": [50],
            "atr_expanding": [False],
        }
    )


def test_strategy_returns_score():

    strategy = (
        VolatilityReversalStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        overbought_features(),
    )

    assert result.score >= 0


def test_strategy_name():

    strategy = (
        VolatilityReversalStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        overbought_features(),
    )

    assert (
        result.strategy_name
        == "Volatility Spike Reversal"
    )


def test_overbought_scores_higher():

    strategy = (
        VolatilityReversalStrategy()
    )

    overbought = strategy.evaluate(
        create_market_analysis(),
        overbought_features(),
    )

    neutral = strategy.evaluate(
        create_market_analysis(),
        neutral_features(),
    )

    assert (
        overbought.score
        > neutral.score
    )


def test_oversold_scores_higher():

    strategy = (
        VolatilityReversalStrategy()
    )

    oversold = strategy.evaluate(
        create_market_analysis(),
        oversold_features(),
    )

    neutral = strategy.evaluate(
        create_market_analysis(),
        neutral_features(),
    )

    assert (
        oversold.score
        > neutral.score
    )


def test_volatile_regime_bonus():

    strategy = (
        VolatilityReversalStrategy()
    )

    volatile = strategy.evaluate(
        create_market_analysis(
            regime="VOLATILE",
        ),
        overbought_features(),
    )

    trending = strategy.evaluate(
        create_market_analysis(
            regime="TRENDING",
        ),
        overbought_features(),
    )

    assert (
        volatile.score
        > trending.score
    )


def test_high_confidence_bonus():

    strategy = (
        VolatilityReversalStrategy()
    )

    high = strategy.evaluate(
        create_market_analysis(
            confidence=90,
        ),
        overbought_features(),
    )

    low = strategy.evaluate(
        create_market_analysis(
            confidence=40,
        ),
        overbought_features(),
    )

    assert (
        high.score
        > low.score
    )