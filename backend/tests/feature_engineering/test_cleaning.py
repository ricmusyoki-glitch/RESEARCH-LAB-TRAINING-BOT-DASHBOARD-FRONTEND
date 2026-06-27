"""
Tests for CleaningEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd
import pytest

from app.feature_engineering.cleaning import CleaningEngine


# ==========================================================
# Fixtures
# ==========================================================

@pytest.fixture
def cleaner() -> CleaningEngine:
    """
    Cleaning engine instance.
    """
    return CleaningEngine()


@pytest.fixture
def dirty_dataframe() -> pd.DataFrame:
    """
    Create intentionally messy market data.
    """

    start = datetime(2025, 1, 1)

    dataframe = pd.DataFrame(
        {
            "TIME": [
                start,
                start + timedelta(minutes=1),
                start + timedelta(minutes=1),  # duplicate
                start + timedelta(minutes=3),
            ],
            "OPEN": [
                "1.1000",
                "1.1001",
                "1.1001",
                "1.1003",
            ],
            "HIGH": [
                "1.1010",
                "1.1011",
                "1.1011",
                "1.1013",
            ],
            "LOW": [
                "1.0990",
                "1.0991",
                "1.0991",
                "1.0993",
            ],
            "CLOSE": [
                "1.1005",
                "1.1006",
                "1.1006",
                None,
            ],
            "VOLUME": [
                "100",
                "100",
                "100",
                "100",
            ],
        }
    )

    return dataframe


# ==========================================================
# Tests
# ==========================================================

def test_cleaning_returns_success(
    cleaner: CleaningEngine,
    dirty_dataframe: pd.DataFrame,
):
    """
    Cleaning should succeed.
    """

    result = cleaner.clean(dirty_dataframe)

    assert result.success is True


def test_column_names_are_normalized(
    cleaner: CleaningEngine,
    dirty_dataframe: pd.DataFrame,
):
    """
    Columns should become lowercase.
    """

    result = cleaner.clean(dirty_dataframe)

    expected_columns = {
        "time",
        "open",
        "high",
        "low",
        "close",
        "volume",
    }

    assert set(
        result.dataframe.columns
    ) == expected_columns


def test_duplicate_rows_removed(
    cleaner: CleaningEngine,
    dirty_dataframe: pd.DataFrame,
):
    """
    Duplicate timestamps should be removed.
    """

    result = cleaner.clean(dirty_dataframe)

    assert (
        result.dataframe["time"]
        .duplicated()
        .sum()
        == 0
    )


def test_timestamp_column_converted(
    cleaner: CleaningEngine,
    dirty_dataframe: pd.DataFrame,
):
    """
    Time column should become datetime.
    """

    result = cleaner.clean(dirty_dataframe)

    assert pd.api.types.is_datetime64_any_dtype(
        result.dataframe["time"]
    )


def test_numeric_columns_converted(
    cleaner: CleaningEngine,
    dirty_dataframe: pd.DataFrame,
):
    """
    Numeric columns should become numeric.
    """

    result = cleaner.clean(dirty_dataframe)

    numeric_columns = [
        "open",
        "high",
        "low",
        "close",
        "volume",
    ]

    for column in numeric_columns:

        assert pd.api.types.is_numeric_dtype(
            result.dataframe[column]
        )


def test_invalid_rows_removed(
    cleaner: CleaningEngine,
    dirty_dataframe: pd.DataFrame,
):
    """
    Rows containing NaN values should be removed.
    """

    result = cleaner.clean(dirty_dataframe)

    assert (
        result.dataframe.isna()
        .sum()
        .sum()
        == 0
    )


def test_index_reset(
    cleaner: CleaningEngine,
    dirty_dataframe: pd.DataFrame,
):
    """
    Index should be reset.
    """

    result = cleaner.clean(dirty_dataframe)

    expected_index = list(
        range(len(result.dataframe))
    )

    assert (
        result.dataframe.index.tolist()
        == expected_index
    )