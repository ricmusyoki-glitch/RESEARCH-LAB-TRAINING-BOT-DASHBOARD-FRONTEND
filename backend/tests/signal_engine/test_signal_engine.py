"""
Tests for Signal Engine.

Author: Rick Research Lab
"""

from app.core.models import (
    ConfidenceResult,
    DXYAnalysisResult,
    MarketAnalysisResult,
    PairAnalysisResult,
    SignalResult,
    StrategyRankingResult,
    StrategyScore,
    TimeframeAnalysis,
)

from app.signal_engine.engine import (
    SignalEngine,
)


def create_analysis(
    bias: str = "BULLISH",
    confidence: float = 90,
) -> MarketAnalysisResult:

    timeframe = TimeframeAnalysis(
        timeframe="H4",
        bias=bias,
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


def create_rankings() -> StrategyRankingResult:

    top_strategy = StrategyScore(
        strategy_name="EMA Trend Following",
        score=90,
        reasons=[],
    )

    return StrategyRankingResult(
        success=True,
        rankings=[top_strategy],
        top_strategies=[top_strategy],
    )


def test_returns_signal_result():

    engine = SignalEngine()

    result = engine.generate(
        create_analysis(),
        create_rankings(),
    )

    assert isinstance(
        result,
        SignalResult,
    )


def test_bullish_bias_generates_buy():

    engine = SignalEngine()

    result = engine.generate(
        create_analysis(
            bias="BULLISH",
        ),
        create_rankings(),
    )

    assert result.signal == "BUY"


def test_bearish_bias_generates_sell():

    engine = SignalEngine()

    result = engine.generate(
        create_analysis(
            bias="BEARISH",
        ),
        create_rankings(),
    )

    assert result.signal == "SELL"


def test_neutral_bias_generates_no_trade():

    engine = SignalEngine()

    result = engine.generate(
        create_analysis(
            bias="NEUTRAL",
        ),
        create_rankings(),
    )

    assert (
        result.signal
        == "NO TRADE"
    )


def test_low_confidence_generates_no_trade():

    engine = SignalEngine()

    result = engine.generate(
        create_analysis(
            confidence=50,
        ),
        create_rankings(),
    )

    assert (
        result.signal
        == "NO TRADE"
    )


def test_reasons_exist():

    engine = SignalEngine()

    result = engine.generate(
        create_analysis(),
        create_rankings(),
    )

    assert len(
        result.reasons
    ) > 0