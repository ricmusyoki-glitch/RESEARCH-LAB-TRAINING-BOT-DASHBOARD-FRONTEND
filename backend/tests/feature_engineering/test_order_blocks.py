"""
Tests for OrderBlockEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd

from app.feature_engineering.order_blocks import (
    OrderBlockEngine,
)


def test_engine_runs():

    engine = OrderBlockEngine()

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


def test_order_blocks_exists():

    engine = OrderBlockEngine()

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
        result.order_blocks,
        list,
    )


def test_metadata_exists():

    engine = OrderBlockEngine()

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

def test_order_block_metadata_exists():

    engine = OrderBlockEngine()

    dataframe = pd.DataFrame(
        {
            "open": [10, 12, 10],
            "close": [8, 14, 15],
            "high": [11, 15, 16],
            "low": [7, 10, 12],
            "bullish_bos": [
                False,
                False,
                True,
            ],
        }
    )

    result = engine.detect(
        dataframe
    )

    assert (
        "total_order_blocks"
        in result.metadata
    )


def test_returns_order_block_list():

    engine = OrderBlockEngine()

    dataframe = pd.DataFrame(
        {
            "open": [10, 12, 10],
            "close": [8, 14, 15],
            "high": [11, 15, 16],
            "low": [7, 10, 12],
            "bullish_bos": [
                False,
                False,
                True,
            ],
        }
    )

    result = engine.detect(
        dataframe
    )

    assert isinstance(
        result.order_blocks,
        list,
    )