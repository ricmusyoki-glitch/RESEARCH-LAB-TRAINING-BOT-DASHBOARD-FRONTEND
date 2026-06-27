"""
Tests for Support Resistance Fade Strategy.

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

from app.strategy.strategies.support_resistance_fade import (
    SupportResistanceFadeStrategy,
)


def create_market_analysis(
    confidence: float = 90,
    regime: str = "RANGING",
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


def support_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "swing_high": [False],
            "swing_low": [True],
        }
    )


def resistance_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "swing_high": [True],
            "swing_low": [False],
        }
    )


def neutral_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "swing_high": [False],
            "swing_low": [False],
        }
    )


def test_strategy_returns_score():

    strategy = (
        SupportResistanceFadeStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        support_features(),
    )

    assert result.score >= 0


def test_strategy_name():

    strategy = (
        SupportResistanceFadeStrategy()
    )

    result = strategy.evaluate(
        create_market_analysis(),
        support_features(),
    )

    assert (
        result.strategy_name
        == "Support Resistance Fade"
    )


def test_support_scores_higher():

    strategy = (
        SupportResistanceFadeStrategy()
    )

    support = strategy.evaluate(
        create_market_analysis(),
        support_features(),
    )

    neutral = strategy.evaluate(
        create_market_analysis(),
        neutral_features(),
    )

    assert support.score > neutral.score


def test_resistance_scores_higher():

    strategy = (
        SupportResistanceFadeStrategy()
    )

    resistance = strategy.evaluate(
        create_market_analysis(),
        resistance_features(),
    )

    neutral = strategy.evaluate(
        create_market_analysis(),
        neutral_features(),
    )

    assert resistance.score > neutral.score


def test_ranging_regime_bonus():

    strategy = (
        SupportResistanceFadeStrategy()
    )

    ranging = strategy.evaluate(
        create_market_analysis(
            regime="RANGING",
        ),
        support_features(),
    )

    trending = strategy.evaluate(
        create_market_analysis(
            regime="TRENDING",
        ),
        support_features(),
    )

    assert ranging.score > trending.score


def test_high_confidence_bonus():

    strategy = (
        SupportResistanceFadeStrategy()
    )

    high = strategy.evaluate(
        create_market_analysis(
            confidence=90,
        ),
        support_features(),
    )

    low = strategy.evaluate(
        create_market_analysis(
            confidence=40,
        ),
        support_features(),
    )

    assert high.score > low.score