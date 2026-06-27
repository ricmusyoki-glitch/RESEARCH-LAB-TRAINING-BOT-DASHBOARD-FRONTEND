"""
Tests for PairAnalysisEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd
import pytest

from app.market_analysis.pair_analysis import (
    PairAnalysisEngine,
)


# ==========================================================
# Fixtures
# ==========================================================


@pytest.fixture
def pair_engine() -> PairAnalysisEngine:
    return PairAnalysisEngine()


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
    pair_engine: PairAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = pair_engine.analyze(
        "EURUSD",
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.success is True


def test_pair_name_preserved(
    pair_engine: PairAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = pair_engine.analyze(
        "EURUSD",
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.pair == "EURUSD"


def test_daily_bias_bullish(
    pair_engine: PairAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = pair_engine.analyze(
        "EURUSD",
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.daily.bias == "BULLISH"


def test_h4_bias_bullish(
    pair_engine: PairAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = pair_engine.analyze(
        "EURUSD",
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.h4.bias == "BULLISH"


def test_overall_bias_bullish(
    pair_engine: PairAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = pair_engine.analyze(
        "EURUSD",
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.overall_bias == "BULLISH"


def test_bearish_analysis(
    pair_engine: PairAnalysisEngine,
    bearish_dataframe: pd.DataFrame,
):
    result = pair_engine.analyze(
        "EURUSD",
        bearish_dataframe,
        bearish_dataframe,
        bearish_dataframe,
        bearish_dataframe,
    )

    assert result.overall_bias == "BEARISH"


def test_confidence_present(
    pair_engine: PairAnalysisEngine,
    bullish_dataframe: pd.DataFrame,
):
    result = pair_engine.analyze(
        "EURUSD",
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
        bullish_dataframe,
    )

    assert result.confidence > 0