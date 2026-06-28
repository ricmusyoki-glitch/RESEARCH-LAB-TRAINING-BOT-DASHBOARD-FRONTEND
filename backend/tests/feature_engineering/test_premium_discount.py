"""
Tests for PremiumDiscountEngine.

Author: Rick Research Lab
"""

import pandas as pd

from app.feature_engineering.premium_discount import (
    PremiumDiscountEngine,
)


def test_engine_runs():

    engine = PremiumDiscountEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 20, 30],
            "low": [5, 4, 3],
            "close": [10, 11, 12],
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

    assert result.success is True


def test_zones_exists():

    engine = PremiumDiscountEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 20, 30],
            "low": [5, 4, 3],
            "close": [10, 11, 12],
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
        result.zones,
        list,
    )


def test_metadata_exists():

    engine = PremiumDiscountEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 20, 30],
            "low": [5, 4, 3],
            "close": [10, 11, 12],
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


def test_current_zone_exists():

    engine = PremiumDiscountEngine()

    dataframe = pd.DataFrame(
        {
            "high": [10, 20, 30],
            "low": [5, 4, 3],
            "close": [10, 11, 12],
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

    assert (
        "current_zone"
        in result.metadata
    )