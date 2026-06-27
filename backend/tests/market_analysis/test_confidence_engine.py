"""
Tests for ConfidenceEngine.

Author: Rick Research Lab
"""

from app.core.models import (
    ConfidenceResult,
    DXYAnalysisResult,
    PairAnalysisResult,
    TimeframeAnalysis,
)
from app.market_analysis.confidence_engine import (
    ConfidenceEngine,
)


def create_timeframe(
    bias: str,
    regime: str = "TRENDING",
    confidence: float = 80.0,
) -> TimeframeAnalysis:
    return TimeframeAnalysis(
        timeframe="TEST",
        bias=bias,
        regime=regime,
        confidence=confidence,
    )


def create_dxy_result(
    dollar_strength: float,
) -> DXYAnalysisResult:
    tf = create_timeframe(
        "BULLISH",
    )

    return DXYAnalysisResult(
        success=True,
        weekly=tf,
        daily=tf,
        h4=tf,
        h1=TimeframeAnalysis(
            timeframe="N/A",
            bias="N/A",
            regime="N/A",
            confidence=0,
        ),
        dollar_strength=dollar_strength,
    )


def create_pair_result(
    overall_bias: str,
    daily_bias: str,
    h4_bias: str,
    h1_bias: str,
    h4_regime: str = "TRENDING",
) -> PairAnalysisResult:

    return PairAnalysisResult(
        success=True,
        pair="EURUSD",
        daily=create_timeframe(
            daily_bias,
        ),
        h4=create_timeframe(
            h4_bias,
            regime=h4_regime,
        ),
        h1=create_timeframe(
            h1_bias,
        ),
        m15=create_timeframe(
            h1_bias,
        ),
        overall_bias=overall_bias,
        confidence=80,
    )


def test_confidence_engine_success():

    engine = ConfidenceEngine()

    result = engine.calculate(
        create_dxy_result(80),
        create_pair_result(
            "BULLISH",
            "BULLISH",
            "BULLISH",
            "BULLISH",
        ),
    )

    assert result.success is True


def test_returns_confidence_result():

    engine = ConfidenceEngine()

    result = engine.calculate(
        create_dxy_result(80),
        create_pair_result(
            "BULLISH",
            "BULLISH",
            "BULLISH",
            "BULLISH",
        ),
    )

    assert isinstance(
        result,
        ConfidenceResult,
    )


def test_high_confidence_when_aligned():

    engine = ConfidenceEngine()

    result = engine.calculate(
        create_dxy_result(80),
        create_pair_result(
            "BULLISH",
            "BULLISH",
            "BULLISH",
            "BULLISH",
        ),
    )

    assert result.confidence >= 80


def test_lower_confidence_when_choppy():

    engine = ConfidenceEngine()

    result = engine.calculate(
        create_dxy_result(80),
        create_pair_result(
            "BULLISH",
            "BULLISH",
            "BULLISH",
            "BULLISH",
            h4_regime="CHOPPY",
        ),
    )

    assert result.confidence < 80


def test_reasons_present():

    engine = ConfidenceEngine()

    result = engine.calculate(
        create_dxy_result(80),
        create_pair_result(
            "BULLISH",
            "BULLISH",
            "BULLISH",
            "BULLISH",
        ),
    )

    assert len(
        result.reasons
    ) > 0


def test_confidence_range():

    engine = ConfidenceEngine()

    result = engine.calculate(
        create_dxy_result(80),
        create_pair_result(
            "BULLISH",
            "BULLISH",
            "BULLISH",
            "BULLISH",
        ),
    )

    assert (
        0
        <= result.confidence
        <= 100
    )