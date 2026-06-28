"""
Tests for LiquidityEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd

from app.feature_engineering.liquidity import (
    LiquidityEngine,
)


def test_engine_runs():

    engine = LiquidityEngine()

    rows = 20

    dataframe = pd.DataFrame(
        {
            "time": [
                datetime(2025, 1, 1)
                + timedelta(minutes=i)
                for i in range(rows)
            ],
            "open": [10] * rows,
            "high": [11] * rows,
            "low": [9] * rows,
            "close": [10] * rows,
            "volume": [100] * rows,
        }
    )

    result = engine.detect(
        dataframe
    )

    assert result.success is True


def test_liquidity_zones_exists():

    engine = LiquidityEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 20, 30],
            "low": [5, 4, 3],
        }
    )

    result = engine.detect(
        dataframe
    )

    assert isinstance(
        result.liquidity_zones,
        list,
    )


def test_metadata_exists():

    engine = LiquidityEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 20, 30],
            "low": [5, 4, 3],
        }
    )

    result = engine.detect(
        dataframe
    )

    assert isinstance(
        result.metadata,
        dict,
    )

def test_liquidity_metadata_keys_exist():

    engine = LiquidityEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 10, 10],
            "low": [5, 5, 5],
            "swing_high": [
                True,
                True,
                True,
            ],
            "swing_low": [
                True,
                True,
                True,
            ],
        }
    )

    result = engine.detect(
        dataframe
    )

    assert (
        "equal_highs"
        in result.metadata
    )

    assert (
        "equal_lows"
        in result.metadata
    )


def test_liquidity_zones_returned():

    engine = LiquidityEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 10, 10],
            "low": [5, 5, 5],
            "swing_high": [
                True,
                True,
                True,
            ],
            "swing_low": [
                True,
                True,
                True,
            ],
        }
    )

    result = engine.detect(
        dataframe
    )

    assert isinstance(
        result.liquidity_zones,
        list,
    )