"""
Tests for RegimeEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd
import pytest

from app.feature_engineering.regime import (
    RegimeEngine,
)


# ==========================================================
# Fixtures
# ==========================================================

@pytest.fixture
def regime_engine() -> RegimeEngine:
    return RegimeEngine()


@pytest.fixture
def trending_dataframe() -> pd.DataFrame:
    """
    Dataset representing
    a trending market.
    """

    rows = 300

    start = datetime(2025, 1, 1)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(minutes=i)
                for i in range(rows)
            ],
            "ema_20": [1.3000] * rows,
            "ema_50": [1.2000] * rows,
            "ema_200": [1.1000] * rows,
            "atr": [0.005] * rows,
            "bullish_bos": [True] * 3
            + [False] * (rows - 3),
            "bearish_bos": [False] * rows,
            "bullish_choch": [False] * rows,
            "bearish_choch": [False] * rows,
        }
    )


@pytest.fixture
def volatile_dataframe() -> pd.DataFrame:
    """
    Dataset representing
    a volatile market.
    """

    rows = 300

    start = datetime(2025, 1, 1)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(minutes=i)
                for i in range(rows)
            ],
            "ema_20": [1.2000] * rows,
            "ema_50": [1.1500] * rows,
            "ema_200": [1.1000] * rows,
            "atr": [0.050] * rows,
            "bullish_bos": [False] * rows,
            "bearish_bos": [False] * rows,
            "bullish_choch": [False] * rows,
            "bearish_choch": [False] * rows,
        }
    )


@pytest.fixture
def choppy_dataframe() -> pd.DataFrame:
    """
    Dataset representing
    a choppy market.
    """

    rows = 300

    start = datetime(2025, 1, 1)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(minutes=i)
                for i in range(rows)
            ],
            "ema_20": [1.2000] * rows,
            "ema_50": [1.1990] * rows,
            "ema_200": [1.1980] * rows,
            "atr": [0.005] * rows,
            "bullish_bos": [False] * rows,
            "bearish_bos": [False] * rows,
            "bullish_choch": [True] * 3
            + [False] * (rows - 3),
            "bearish_choch": [True] * 3
            + [False] * (rows - 3),
        }
    )


# ==========================================================
# Tests
# ==========================================================

def test_regime_engine_success(
    regime_engine: RegimeEngine,
    trending_dataframe: pd.DataFrame,
):
    result = regime_engine.detect(
        trending_dataframe
    )

    assert result.success is True


def test_detects_trending_market(
    regime_engine: RegimeEngine,
    trending_dataframe: pd.DataFrame,
):
    result = regime_engine.detect(
        trending_dataframe
    )

    assert (
        result.metadata["regime"]
        == "TRENDING"
    )


def test_detects_volatile_market(
    regime_engine: RegimeEngine,
    volatile_dataframe: pd.DataFrame,
):
    result = regime_engine.detect(
        volatile_dataframe
    )

    assert (
        result.metadata["regime"]
        == "VOLATILE"
    )


def test_detects_choppy_market(
    regime_engine: RegimeEngine,
    choppy_dataframe: pd.DataFrame,
):
    result = regime_engine.detect(
        choppy_dataframe
    )

    assert (
        result.metadata["regime"]
        == "CHOPPY"
    )


def test_metadata_contains_regime(
    regime_engine: RegimeEngine,
    trending_dataframe: pd.DataFrame,
):
    result = regime_engine.detect(
        trending_dataframe
    )

    assert "regime" in result.metadata


def test_metadata_contains_counts(
    regime_engine: RegimeEngine,
    trending_dataframe: pd.DataFrame,
):
    result = regime_engine.detect(
        trending_dataframe
    )

    assert "bos_count" in result.metadata

    assert "choch_count" in result.metadata