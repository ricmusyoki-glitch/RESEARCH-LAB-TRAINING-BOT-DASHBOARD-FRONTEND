"""
Tests for FVGEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd

from app.feature_engineering.fvg import (
    FVGEngine,
)


def test_engine_runs():

    engine = FVGEngine()

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


def test_gaps_attribute_exists():

    engine = FVGEngine()

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
        result.gaps,
        list,
    )


def test_metadata_exists():

    engine = FVGEngine()

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

def test_fvg_metadata_exists():

    engine = FVGEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 12, 20],
            "low": [5, 6, 15],
        }
    )

    result = engine.detect(
        dataframe
    )

    assert (
        "total_fvg"
        in result.metadata
    )


def test_returns_gap_list():

    engine = FVGEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 12, 20],
            "low": [5, 6, 15],
        }
    )

    result = engine.detect(
        dataframe
    )

    assert isinstance(
        result.gaps,
        list,
    )