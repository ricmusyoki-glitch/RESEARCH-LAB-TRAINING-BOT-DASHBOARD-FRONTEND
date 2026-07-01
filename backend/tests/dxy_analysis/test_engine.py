"""
Tests for DXYAnalysisEngine.

Author: Rick Research Lab
"""

from app.dxy_analysis.engine import (
    DXYAnalysisEngine,
)

from app.core.models import (
    DXYAnalysisResult,
)


def test_returns_result():

    engine = DXYAnalysisEngine()

    result = engine.analyze()

    assert isinstance(
        result,
        DXYAnalysisResult,
    )


def test_success():

    engine = DXYAnalysisEngine()

    result = engine.analyze()

    assert result.success is True


def test_timeframes_exist():

    engine = DXYAnalysisEngine()

    result = engine.analyze()

    assert result.weekly is not None

    assert result.daily is not None

    assert result.h4 is not None

    assert result.h1 is not None