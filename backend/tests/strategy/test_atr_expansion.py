"""
Tests for ATR Expansion Strategy.

Author: Rick Research Lab
"""

from app.core.models import (
    ConfidenceResult,
    DXYAnalysisResult,
    MarketAnalysisResult,
    PairAnalysisResult,
    TimeframeAnalysis,
)

from app.strategy.strategies.atr_expansion import (
    AtrExpansionStrategy,
)

import pandas as pd


def create_market_analysis(
    confidence: float = 90,
    bias: str = "BULLISH",
    regime: str = "VOLATILE",
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


def expanding_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "atr_expanding": [True],
        }
    )


def non_expanding_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "atr_expanding": [False],
        }
    )


def test_strategy_returns_score():

    strategy = AtrExpansionStrategy()

    result = strategy.evaluate(
        create_market_analysis(),
        expanding_features(),
    )

    assert result.score >= 0


def test_strategy_name():

    strategy = AtrExpansionStrategy()

    result = strategy.evaluate(
        create_market_analysis(),
        expanding_features(),
    )

    assert (
        result.strategy_name
        == "ATR Expansion"
    )


def test_expanding_atr_scores_higher():

    strategy = AtrExpansionStrategy()

    expanding = strategy.evaluate(
        create_market_analysis(),
        expanding_features(),
    )

    normal = strategy.evaluate(
        create_market_analysis(),
        non_expanding_features(),
    )

    assert (
        expanding.score
        > normal.score
    )


def test_volatile_regime_bonus():

    strategy = AtrExpansionStrategy()

    volatile = strategy.evaluate(
        create_market_analysis(
            regime="VOLATILE",
        ),
        expanding_features(),
    )

    trending = strategy.evaluate(
        create_market_analysis(
            regime="TRENDING",
        ),
        expanding_features(),
    )

    assert (
        volatile.score
        > trending.score
    )


def test_high_confidence_bonus():

    strategy = AtrExpansionStrategy()

    high = strategy.evaluate(
        create_market_analysis(
            confidence=90,
        ),
        expanding_features(),
    )

    low = strategy.evaluate(
        create_market_analysis(
            confidence=40,
        ),
        expanding_features(),
    )

    assert (
        high.score
        > low.score
    )


def test_reasons_present():

    strategy = AtrExpansionStrategy()

    result = strategy.evaluate(
        create_market_analysis(),
        expanding_features(),
    )

    assert len(
        result.reasons
    ) > 0