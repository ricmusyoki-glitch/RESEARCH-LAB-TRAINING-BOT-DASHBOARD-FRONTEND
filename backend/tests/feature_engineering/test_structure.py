"""
Tests for StructureEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd
import pytest

from app.feature_engineering.structure import (
    StructureEngine,
)


# ==========================================================
# Fixtures
# ==========================================================

@pytest.fixture
def structure_engine() -> StructureEngine:
    """
    Structure engine instance.
    """
    return StructureEngine()


@pytest.fixture
def market_dataframe() -> pd.DataFrame:
    """
    Create market data with clear
    swing highs and swing lows.
    """

    start = datetime(2025, 1, 1)

    highs = [
    10,11,12,13,14,
    25,
    14,13,12,11,10,
    11,12,13,14,15,
    30,
    15,14,13,12,11
  ]

    lows = [
    10,9,8,7,6,
    5,
    6,7,8,9,10,
    9,8,7,6,5,
    4,
    5,6,7,8,9
  ]

    rows = len(highs)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(minutes=i)
                for i in range(rows)
            ],
            "open": [10] * rows,
            "high": highs,
            "low": lows,
            "close": [10] * rows,
            "volume": [100] * rows,
        }
    )


# ==========================================================
# Tests
# ==========================================================

def test_structure_engine_success(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    """
    Structure detection should succeed.
    """

    result = structure_engine.detect(
        market_dataframe
    )

    assert result.success is True


def test_swing_high_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    """
    Swing high column should exist.
    """

    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "swing_high"
        in result.dataframe.columns
    )


def test_swing_low_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    """
    Swing low column should exist.
    """

    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "swing_low"
        in result.dataframe.columns
    )


def test_detects_swing_highs(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    """
    At least one swing high should be found.
    """

    result = structure_engine.detect(
        market_dataframe
    )

    swing_high_count = int(
        result.dataframe["swing_high"].sum()
    )

    assert swing_high_count > 0


def test_detects_swing_lows(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    """
    At least one swing low should be found.
    """

    result = structure_engine.detect(
        market_dataframe
    )

    swing_low_count = int(
        result.dataframe["swing_low"].sum()
    )

    assert swing_low_count > 0


def test_structure_list_returned(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    """
    Structure names should be returned.
    """

    result = structure_engine.detect(
        market_dataframe
    )

    assert len(result.structures) > 0


def test_dataframe_size_preserved(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    """
    Structure detection should not remove rows.
    """

    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        len(result.dataframe)
        == len(market_dataframe)
    )

# ==========================================================
# HH / HL / LH / LL Tests
# ==========================================================

def test_higher_high_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "higher_high"
        in result.dataframe.columns
    )


def test_higher_low_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "higher_low"
        in result.dataframe.columns
    )


def test_lower_high_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "lower_high"
        in result.dataframe.columns
    )


def test_lower_low_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "lower_low"
        in result.dataframe.columns
    )

# ==========================================================
# BOS / CHOCH Regression Tests
# ==========================================================

def test_bullish_bos_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "bullish_bos"
        in result.dataframe.columns
    )


def test_bearish_bos_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "bearish_bos"
        in result.dataframe.columns
    )


def test_bullish_choch_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "bullish_choch"
        in result.dataframe.columns
    )


def test_bearish_choch_column_exists(
    structure_engine: StructureEngine,
    market_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        market_dataframe
    )

    assert (
        "bearish_choch"
        in result.dataframe.columns
    )