"""
Tests for DXYAnalysisEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd
import pytest

from app.market_analysis.dxy_analysis import (
    DXYAnalysisEngine,
)


# ==========================================================
# Fixtures
# ==========================================================


@pytest.fixture
def dxy_engine() -> DXYAnalysisEngine:
    return DXYAnalysisEngine()


@pytest.fixture
def bullish_dataframe() -> pd.DataFrame:
    """
    Bullish timeframe dataset.
    """

    rows = 300

    start = datetime(2025, 1, 1)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(hours=i)
                for i in range(rows)
            ],
            "ema_20": [110.0] * rows,
            "ema_50": [105.0] * rows,
            "ema_200": [100.0] * rows,
            "bullish_bos": [False] * (rows - 1)
            + [True],
            "bearish_bos": [False] * rows,
            "regime": ["TRENDING"] * rows,
        }
    )


@pytest.fixture
def bearish_dataframe() -> pd.DataFrame:
    """
    Bearish timeframe dataset.
    """

    rows = 300

    start = datetime(2025, 1, 1)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(hours=i)
                for i in range(rows)
            ],
            "ema_20": [100.0] * rows,
            "ema_50": [105.0] * rows,
            "ema_200": [110.0] * rows,
            "bullish_bos": [False] * rows,
            "bearish_bos": [False] * (rows - 1)
            + [True],
            "regime": ["TRENDING"] * rows,
        }
    )


# ==========================================================
# Tests
# ==========================================================


def test_analysis_success(
    dxy_engine: DXYAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = dxy_engine.analyze(
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.success is True


def test_weekly_bias_bullish(
    dxy_engine: DXYAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = dxy_engine.analyze(
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.weekly.bias == "BULLISH"


def test_daily_bias_bullish(
    dxy_engine: DXYAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = dxy_engine.analyze(
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.daily.bias == "BULLISH"


def test_h4_bias_bullish(
    dxy_engine: DXYAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = dxy_engine.analyze(
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.h4.bias == "BULLISH"


def test_dollar_strength_high(
    dxy_engine: DXYAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = dxy_engine.analyze(
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.dollar_strength > 50


def test_bearish_analysis(
    dxy_engine: DXYAnalysisEngine,
    bearish_dataframe: pd.DataFrame,
):
    result = dxy_engine.analyze(
        bearish_dataframe,
        bearish_dataframe,
        bearish_dataframe,
    )

    assert result.weekly.bias == "BEARISH"

    assert result.dollar_strength < 50


def test_confidence_present(
    dxy_engine: DXYAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = dxy_engine.analyze(
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.weekly.confidence > 0