"""
Tests for IndicatorEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd
import pytest

from app.feature_engineering.indicators import (
    IndicatorEngine,
)


# ==========================================================
# Fixtures
# ==========================================================

@pytest.fixture
def indicator_engine() -> IndicatorEngine:
    """
    Indicator engine instance.
    """
    return IndicatorEngine()


@pytest.fixture
def market_dataframe() -> pd.DataFrame:
    """
    Create market data large enough
    for EMA200 calculation.
    """

    rows = 300

    start = datetime(2025, 1, 1)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(minutes=i)
                for i in range(rows)
            ],
            "open": [
                1.1000 + i * 0.0001
                for i in range(rows)
            ],
            "high": [
                1.1010 + i * 0.0001
                for i in range(rows)
            ],
            "low": [
                1.0990 + i * 0.0001
                for i in range(rows)
            ],
            "close": [
                1.1005 + i * 0.0001
                for i in range(rows)
            ],
            "volume": [100] * rows,
        }
    )


# ==========================================================
# Tests
# ==========================================================

def test_indicator_engine_success(
    indicator_engine: IndicatorEngine,
    market_dataframe: pd.DataFrame,
):
    """
    Indicator engine should succeed.
    """

    result = indicator_engine.calculate(
        market_dataframe
    )

    assert result.success is True


def test_ema_columns_exist(
    indicator_engine: IndicatorEngine,
    market_dataframe: pd.DataFrame,
):
    """
    EMA columns should exist.
    """

    result = indicator_engine.calculate(
        market_dataframe
    )

    assert "ema_20" in result.dataframe.columns
    assert "ema_50" in result.dataframe.columns
    assert "ema_200" in result.dataframe.columns


def test_rsi_column_exists(
    indicator_engine: IndicatorEngine,
    market_dataframe: pd.DataFrame,
):
    """
    RSI column should exist.
    """

    result = indicator_engine.calculate(
        market_dataframe
    )

    assert "rsi" in result.dataframe.columns


def test_atr_column_exists(
    indicator_engine: IndicatorEngine,
    market_dataframe: pd.DataFrame,
):
    """
    ATR column should exist.
    """

    result = indicator_engine.calculate(
        market_dataframe
    )

    assert "atr" in result.dataframe.columns


def test_macd_columns_exist(
    indicator_engine: IndicatorEngine,
    market_dataframe: pd.DataFrame,
):
    """
    MACD columns should exist.
    """

    result = indicator_engine.calculate(
        market_dataframe
    )

    assert "macd" in result.dataframe.columns

    assert (
        "macd_signal"
        in result.dataframe.columns
    )

    assert (
        "macd_histogram"
        in result.dataframe.columns
    )


def test_indicator_list_returned(
    indicator_engine: IndicatorEngine,
    market_dataframe: pd.DataFrame,
):
    """
    Indicator names should be returned.
    """

    result = indicator_engine.calculate(
        market_dataframe
    )

    assert len(result.indicators) > 0


def test_dataframe_size_preserved(
    indicator_engine: IndicatorEngine,
    market_dataframe: pd.DataFrame,
):
    """
    Indicators should not remove rows.
    """

    result = indicator_engine.calculate(
        market_dataframe
    )

    assert (
        len(result.dataframe)
        == len(market_dataframe)
    )