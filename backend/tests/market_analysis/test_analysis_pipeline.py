"""
Tests for MarketAnalysisPipeline.

Author: Rick Research Lab
"""

from datetime import datetime, timedelta

import pandas as pd
import pytest

from app.market_analysis.analysis_pipeline import (
    MarketAnalysisPipeline,
)


# ==========================================================
# Fixtures
# ==========================================================


@pytest.fixture
def pipeline() -> MarketAnalysisPipeline:
    return MarketAnalysisPipeline()


@pytest.fixture
def bullish_dataframe() -> pd.DataFrame:

    rows = 300

    start = datetime(2025, 1, 1)

    return pd.DataFrame(
        {
            "time": [
                start + timedelta(hours=i)
                for i in range(rows)
            ],
            "ema_20": [110.0] * rows,
            "ema_50": [105.0] * rows,
            "ema_200": [100.0] * rows,
            "bullish_bos": [False] * (rows - 1)
            + [True],
            "bearish_bos": [False] * rows,
            "regime": ["TRENDING"] * rows,
        }
    )


# ==========================================================
# Tests
# ==========================================================


def test_pipeline_success(
    pipeline: MarketAnalysisPipeline,
    bullish_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        pair="EURUSD",
        dxy_weekly=bullish_dataframe,
        dxy_daily=bullish_dataframe,
        dxy_h4=bullish_dataframe,
        pair_daily=bullish_dataframe,
        pair_h4=bullish_dataframe,
        pair_h1=bullish_dataframe,
        pair_m15=bullish_dataframe,
    )

    assert result.success is True


def test_contains_dxy_analysis(
    pipeline: MarketAnalysisPipeline,
    bullish_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        pair="EURUSD",
        dxy_weekly=bullish_dataframe,
        dxy_daily=bullish_dataframe,
        dxy_h4=bullish_dataframe,
        pair_daily=bullish_dataframe,
        pair_h4=bullish_dataframe,
        pair_h1=bullish_dataframe,
        pair_m15=bullish_dataframe,
    )

    assert (
        result.dxy_analysis
        is not None
    )


def test_contains_pair_analysis(
    pipeline: MarketAnalysisPipeline,
    bullish_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        pair="EURUSD",
        dxy_weekly=bullish_dataframe,
        dxy_daily=bullish_dataframe,
        dxy_h4=bullish_dataframe,
        pair_daily=bullish_dataframe,
        pair_h4=bullish_dataframe,
        pair_h1=bullish_dataframe,
        pair_m15=bullish_dataframe,
    )

    assert (
        result.pair_analysis
        is not None
    )


def test_contains_confidence_analysis(
    pipeline: MarketAnalysisPipeline,
    bullish_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        pair="EURUSD",
        dxy_weekly=bullish_dataframe,
        dxy_daily=bullish_dataframe,
        dxy_h4=bullish_dataframe,
        pair_daily=bullish_dataframe,
        pair_h4=bullish_dataframe,
        pair_h1=bullish_dataframe,
        pair_m15=bullish_dataframe,
    )

    assert (
        result.confidence_analysis
        is not None
    )


def test_trade_ready_is_boolean(
    pipeline: MarketAnalysisPipeline,
    bullish_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        pair="EURUSD",
        dxy_weekly=bullish_dataframe,
        dxy_daily=bullish_dataframe,
        dxy_h4=bullish_dataframe,
        pair_daily=bullish_dataframe,
        pair_h4=bullish_dataframe,
        pair_h1=bullish_dataframe,
        pair_m15=bullish_dataframe,
    )

    assert isinstance(
        result.trade_ready,
        bool,
    )


def test_pair_name_preserved(
    pipeline: MarketAnalysisPipeline,
    bullish_dataframe: pd.DataFrame,
):
    result = pipeline.run(
        pair="EURUSD",
        dxy_weekly=bullish_dataframe,
        dxy_daily=bullish_dataframe,
        dxy_h4=bullish_dataframe,
        pair_daily=bullish_dataframe,
        pair_h4=bullish_dataframe,
        pair_h1=bullish_dataframe,
        pair_m15=bullish_dataframe,
    )

    assert (
        result.pair_analysis.pair
        == "EURUSD"
    )