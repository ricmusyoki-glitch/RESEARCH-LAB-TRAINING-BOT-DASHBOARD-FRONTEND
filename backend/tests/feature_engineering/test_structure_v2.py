"""
Tests for StructureEngine V2.

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
    return StructureEngine()


@pytest.fixture
def bos_dataframe() -> pd.DataFrame:
    """
    Dataset designed to create a bullish BOS.
    """

    start = datetime(2025, 1, 1)

    highs = [
        10,11,12,13,14,
        25,
        14,13,12,11,10,
        11,12,13,14,15,
        30,
        15,14,13,12,11,
        31,32,33,34,35
    ]

    lows = [
        10,9,8,7,6,
        5,
        6,7,8,9,10,
        9,8,7,6,5,
        4,
        5,6,7,8,9,
        10,11,12,13,14
    ]

    closes = highs.copy()

    rows = len(highs)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(minutes=i)
                for i in range(rows)
            ],
            "open": closes,
            "high": highs,
            "low": lows,
            "close": closes,
            "volume": [100] * rows,
        }
    )


# ==========================================================
# BOS Tests
# ==========================================================

def test_bullish_bos_column_exists(
    structure_engine: StructureEngine,
    bos_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        bos_dataframe
    )

    assert (
        "bullish_bos"
        in result.dataframe.columns
    )


def test_bearish_bos_column_exists(
    structure_engine: StructureEngine,
    bos_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        bos_dataframe
    )

    assert (
        "bearish_bos"
        in result.dataframe.columns
    )


def test_detects_bullish_bos(
    structure_engine: StructureEngine,
    bos_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        bos_dataframe
    )

    bullish_bos_count = int(
        result.dataframe[
            "bullish_bos"
        ].sum()
    )

    assert bullish_bos_count > 0


# ==========================================================
# CHOCH Tests
# ==========================================================

def test_bullish_choch_column_exists(
    structure_engine: StructureEngine,
    bos_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        bos_dataframe
    )

    assert (
        "bullish_choch"
        in result.dataframe.columns
    )


def test_bearish_choch_column_exists(
    structure_engine: StructureEngine,
    bos_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        bos_dataframe
    )

    assert (
        "bearish_choch"
        in result.dataframe.columns
    )


# ==========================================================
# Regression
# ==========================================================

def test_v1_swings_still_exist(
    structure_engine: StructureEngine,
    bos_dataframe: pd.DataFrame,
):
    result = structure_engine.detect(
        bos_dataframe
    )

    assert (
        result.dataframe[
            "swing_high"
        ].sum()
        > 0
    )

    assert (
        result.dataframe[
            "swing_low"
        ].sum()
        > 0
    )