"""
Tests for SupportResistanceEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd

from app.feature_engineering.support_resistance import (
    SupportResistanceEngine,
)


def test_engine_runs():

    engine = SupportResistanceEngine()

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

def test_levels_attribute_exists():

    engine = SupportResistanceEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 20, 30],
            "low": [5, 4, 3],
            "swing_high": [
                False,
                True,
                False,
            ],
            "swing_low": [
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
        result.levels,
        list,
    )


def test_metadata_exists():

    engine = SupportResistanceEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 20, 30],
            "low": [5, 4, 3],
            "swing_high": [
                False,
                True,
                False,
            ],
            "swing_low": [
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
        result.metadata,
        dict,
    )