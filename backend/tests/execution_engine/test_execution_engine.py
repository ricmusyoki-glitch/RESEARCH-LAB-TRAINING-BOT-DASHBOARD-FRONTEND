"""
Tests for Execution Engine.

Author: Rick Research Lab
"""

import pandas as pd

from app.core.models import (
    ConfidenceResult,
    DXYAnalysisResult,
    ExecutionResult,
    MarketAnalysisResult,
    PairAnalysisResult,
    SignalResult,
    StrategyRankingResult,
    StrategyScore,
    TimeframeAnalysis,
)

from app.execution_engine.engine import (
    ExecutionEngine,
)


def create_analysis(
    confidence: float = 90,
) -> MarketAnalysisResult:

    timeframe = TimeframeAnalysis(
        timeframe="H4",
        bias="BULLISH",
        regime="TRENDING",
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


def create_signal(
    signal: str = "BUY",
) -> SignalResult:

    return SignalResult(
        success=True,
        signal=signal,
        confidence=90,
        reasons=[],
    )


def create_rankings(
    score: float = 90,
) -> StrategyRankingResult:

    strategy = StrategyScore(
        strategy_name="EMA Trend Following",
        score=score,
        reasons=[],
    )

    return StrategyRankingResult(
        success=True,
        rankings=[strategy],
        top_strategies=[strategy],
    )


def bullish_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "bullish_bos": [True],
            "bearish_bos": [False],
            "bullish_choch": [False],
            "bearish_choch": [False],
        }
    )


def bearish_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "bullish_bos": [False],
            "bearish_bos": [True],
            "bullish_choch": [False],
            "bearish_choch": [False],
        }
    )


def no_structure_features() -> pd.DataFrame:

    return pd.DataFrame(
        {
            "bullish_bos": [False],
            "bearish_bos": [False],
            "bullish_choch": [False],
            "bearish_choch": [False],
        }
    )


def test_returns_execution_result():

    engine = ExecutionEngine()

    result = engine.validate(
        create_signal(),
        create_analysis(),
        create_rankings(),
        bullish_features(),
    )

    assert isinstance(
        result,
        ExecutionResult,
    )


def test_valid_buy_entry():

    engine = ExecutionEngine()

    result = engine.validate(
        create_signal(
            signal="BUY",
        ),
        create_analysis(),
        create_rankings(),
        bullish_features(),
    )

    assert result.entry_valid is True


def test_valid_sell_entry():

    engine = ExecutionEngine()

    result = engine.validate(
        create_signal(
            signal="SELL",
        ),
        create_analysis(),
        create_rankings(),
        bearish_features(),
    )

    assert result.entry_valid is True


def test_no_trade_signal_wait():

    engine = ExecutionEngine()

    result = engine.validate(
        create_signal(
            signal="NO TRADE",
        ),
        create_analysis(),
        create_rankings(),
        bullish_features(),
    )

    assert result.entry_valid is False

    assert result.status == "WAIT"


def test_low_confidence_wait():

    engine = ExecutionEngine()

    result = engine.validate(
        create_signal(),
        create_analysis(
            confidence=50,
        ),
        create_rankings(),
        bullish_features(),
    )

    assert result.entry_valid is False


def test_low_strategy_score_wait():

    engine = ExecutionEngine()

    result = engine.validate(
        create_signal(),
        create_analysis(),
        create_rankings(
            score=60,
        ),
        bullish_features(),
    )

    assert result.entry_valid is False


def test_buy_requires_structure():

    engine = ExecutionEngine()

    result = engine.validate(
        create_signal(
            signal="BUY",
        ),
        create_analysis(),
        create_rankings(),
        no_structure_features(),
    )

    assert result.entry_valid is False


def test_sell_requires_structure():

    engine = ExecutionEngine()

    result = engine.validate(
        create_signal(
            signal="SELL",
        ),
        create_analysis(),
        create_rankings(),
        no_structure_features(),
    )

    assert result.entry_valid is False


def test_reasons_present():

    engine = ExecutionEngine()

    result = engine.validate(
        create_signal(),
        create_analysis(),
        create_rankings(),
        bullish_features(),
    )

    assert len(
        result.reasons
    ) > 0