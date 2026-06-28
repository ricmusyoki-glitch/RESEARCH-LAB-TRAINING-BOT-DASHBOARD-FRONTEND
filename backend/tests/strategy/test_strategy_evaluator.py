"""
Tests for Strategy Evaluator.

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

from app.strategy.evaluator import (
    StrategyEvaluator,
)

from app.strategy.registry import (
    StrategyRegistry,
)

from app.strategy.strategies.ema_trend import (
    EmaTrendFollowingStrategy,
)

from app.strategy.strategies.donchian_breakout import (
    DonchianBreakoutStrategy,
)

from app.strategy.strategies.atr_expansion import (
    AtrExpansionStrategy,
)

from app.strategy.strategies.volatility_reversal import (
    VolatilityReversalStrategy,
)

from app.strategy.strategies.rsi_mean_reversion import (
    RsiMeanReversionStrategy,
)

from app.strategy.strategies.support_resistance_fade import (
    SupportResistanceFadeStrategy,
)


def create_market_analysis() -> MarketAnalysisResult:

    timeframe = TimeframeAnalysis(
        timeframe="H4",
        bias="BULLISH",
        regime="TRENDING",
        confidence=90,
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
        confidence=90,
    )

    confidence_result = ConfidenceResult(
        success=True,
        confidence=90,
        reasons=[],
    )

    return MarketAnalysisResult(
        success=True,
        dxy_analysis=dxy,
        pair_analysis=pair,
        confidence_analysis=confidence_result,
        trade_ready=True,
    )


def create_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "time": [datetime.now()],
            "close": [120],
            "ema_20": [120],
            "ema_50": [110],
            "ema_200": [100],
            "rsi": [75],
            "atr_expanding": [True],
            "bb_upper": [120],
            "bb_lower": [80],
            "donchian_high": [120],
            "donchian_low": [80],
            "swing_high": [True],
            "swing_low": [False],
        }
    )


def create_registry() -> StrategyRegistry:

    registry = StrategyRegistry()

    registry.register(
        EmaTrendFollowingStrategy()
    )

    registry.register(
        DonchianBreakoutStrategy()
    )

    registry.register(
        AtrExpansionStrategy()
    )

    registry.register(
        VolatilityReversalStrategy()
    )

    registry.register(
        RsiMeanReversionStrategy()
    )

    registry.register(
        SupportResistanceFadeStrategy()
    )

    return registry


def test_evaluator_returns_result():

    evaluator = StrategyEvaluator(
        create_registry()
    )

    result = evaluator.evaluate(
        create_market_analysis(),
        create_features(),
    )

    assert result.success is True


def test_all_strategies_ranked():

    evaluator = StrategyEvaluator(
        create_registry()
    )

    result = evaluator.evaluate(
        create_market_analysis(),
        create_features(),
    )

    assert len(
        result.rankings
    ) == 6


def test_top_strategies_exist():

    evaluator = StrategyEvaluator(
        create_registry()
    )

    result = evaluator.evaluate(
        create_market_analysis(),
        create_features(),
    )

    assert len(
        result.top_strategies
    ) > 0


def test_rankings_sorted():

    evaluator = StrategyEvaluator(
        create_registry()
    )

    result = evaluator.evaluate(
        create_market_analysis(),
        create_features(),
    )

    scores = [
        strategy.score
        for strategy in result.rankings
    ]

    assert scores == sorted(
        scores,
        reverse=True,
    )


def test_top_strategy_has_score():

    evaluator = StrategyEvaluator(
        create_registry()
    )

    result = evaluator.evaluate(
        create_market_analysis(),
        create_features(),
    )

    assert (
        result.top_strategies[0]
        .score
        >= 0
    )


def test_top_strategy_has_name():

    evaluator = StrategyEvaluator(
        create_registry()
    )

    result = evaluator.evaluate(
        create_market_analysis(),
        create_features(),
    )

    assert (
        result.top_strategies[0]
        .strategy_name
        != ""
    )