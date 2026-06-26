"""
Tests for ValidationEngine.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd
import pytest

from app.feature_engineering.validation import ValidationEngine


# ==========================================================
# Fixtures
# ==========================================================

@pytest.fixture
def valid_dataframe() -> pd.DataFrame:
    """
    Create a valid market dataset.
    """

    rows = 250

    start = datetime(2025, 1, 1)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(minutes=i)
                for i in range(rows)
            ],
            "open": [1.1000] * rows,
            "high": [1.1010] * rows,
            "low": [1.0990] * rows,
            "close": [1.1005] * rows,
            "volume": [100] * rows,
        }
    )


@pytest.fixture
def validator() -> ValidationEngine:
    """
    Validation engine instance.
    """
    return ValidationEngine()


# ==========================================================
# Tests
# ==========================================================

def test_valid_dataset(
    validator: ValidationEngine,
    valid_dataframe: pd.DataFrame,
):
    """
    A valid dataset should pass validation.
    """

    result = validator.validate(valid_dataframe)

    assert result.success is True

    assert result.report.quality_score == 100

    assert len(result.errors) == 0


def test_dataset_below_minimum_rows(
    validator: ValidationEngine,
    valid_dataframe: pd.DataFrame,
):
    """
    Dataset smaller than configured minimum should fail.
    """

    dataframe = valid_dataframe.iloc[:100]

    result = validator.validate(dataframe)

    assert result.success is False

    assert len(result.errors) > 0


def test_missing_column(
    validator: ValidationEngine,
    valid_dataframe: pd.DataFrame,
):
    """
    Missing required column should fail validation.
    """

    dataframe = valid_dataframe.drop(columns=["close"])

    result = validator.validate(dataframe)

    assert result.success is False

    assert any(
        "Missing required columns"
        in error
        for error in result.errors
    )


def test_duplicate_timestamps(
    validator: ValidationEngine,
    valid_dataframe: pd.DataFrame,
):
    """
    Duplicate timestamps should fail validation.
    """

    dataframe = valid_dataframe.copy()

    dataframe.loc[1, "time"] = dataframe.loc[0, "time"]

    result = validator.validate(dataframe)

    assert result.success is False


def test_missing_values(
    validator: ValidationEngine,
    valid_dataframe: pd.DataFrame,
):
    """
    Missing values should fail validation.
    """

    dataframe = valid_dataframe.copy()

    dataframe.loc[10, "close"] = None

    result = validator.validate(dataframe)

    assert result.success is False


def test_invalid_ohlc(
    validator: ValidationEngine,
    valid_dataframe: pd.DataFrame,
):
    """
    Invalid OHLC values should fail validation.
    """

    dataframe = valid_dataframe.copy()

    dataframe.loc[5, "high"] = 1.0980

    result = validator.validate(dataframe)

    assert result.success is False


def test_unsorted_timestamps(
    validator: ValidationEngine,
    valid_dataframe: pd.DataFrame,
):
    """
    Unsorted timestamps should fail validation.
    """

    dataframe = valid_dataframe.sample(
        frac=1,
        random_state=42,
    )

    result = validator.validate(dataframe)

    assert result.success is False