"""
Tests for FeatureEngineeringPipeline.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd
import pytest

from app.feature_engineering.pipeline import (
    FeatureEngineeringPipeline,
)


# ==========================================================
# Fixtures
# ==========================================================

@pytest.fixture
def pipeline() -> FeatureEngineeringPipeline:
    return FeatureEngineeringPipeline()


@pytest.fixture
def market_dataframe() -> pd.DataFrame:
    """
    Create enough rows for:
    - Validation
    - Indicators
    - Structure
    - Regime
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

def test_pipeline_success(
    pipeline: FeatureEngineeringPipeline,
    market_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        market_dataframe
    )

    assert result.success is True


def test_pipeline_returns_dataframe(
    pipeline: FeatureEngineeringPipeline,
    market_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        market_dataframe
    )

    assert isinstance(
        result.dataframe,
        pd.DataFrame,
    )


def test_pipeline_completed_steps(
    pipeline: FeatureEngineeringPipeline,
    market_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        market_dataframe
    )

    assert "validation" in result.completed_steps

    assert "cleaning" in result.completed_steps

    assert "indicators" in result.completed_steps

    assert "structure" in result.completed_steps

    assert "regime" in result.completed_steps


def test_pipeline_generates_indicators(
    pipeline: FeatureEngineeringPipeline,
    market_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        market_dataframe
    )

    assert "ema_20" in result.dataframe.columns

    assert "rsi" in result.dataframe.columns

    assert "atr" in result.dataframe.columns


def test_pipeline_generates_structure(
    pipeline: FeatureEngineeringPipeline,
    market_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        market_dataframe
    )

    assert (
        "swing_high"
        in result.dataframe.columns
    )

    assert (
        "bullish_bos"
        in result.dataframe.columns
    )


def test_pipeline_contains_regime_metadata(
    pipeline: FeatureEngineeringPipeline,
    market_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        market_dataframe
    )

    assert "regime" in result.metadata