"""
Indicator Engine

Calculates technical indicators used by
Market Analysis and Machine Learning.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from ta.momentum import RSIIndicator
from ta.trend import EMAIndicator
from ta.trend import MACD
from ta.volatility import AverageTrueRange

from app.core.base import BaseEngine
from app.core.config import IndicatorConfig
from app.core.models import IndicatorResult


class IndicatorEngine(BaseEngine):
    """
    Calculates technical indicators.
    """

    def calculate(
        self,
        dataframe: pd.DataFrame,
    ) -> IndicatorResult:

        self.start()

        df = dataframe.copy()

        # =========================
        # EMA
        # =========================

        df["ema_20"] = EMAIndicator(
            close=df["close"],
            window=IndicatorConfig.EMA_FAST,
        ).ema_indicator()

        df["ema_50"] = EMAIndicator(
            close=df["close"],
            window=IndicatorConfig.EMA_SLOW,
        ).ema_indicator()

        df["ema_200"] = EMAIndicator(
            close=df["close"],
            window=IndicatorConfig.EMA_LONG,
        ).ema_indicator()

        # =========================
        # RSI
        # =========================

        df["rsi"] = RSIIndicator(
            close=df["close"],
            window=IndicatorConfig.RSI_PERIOD,
        ).rsi()

        # =========================
        # ATR
        # =========================

        df["atr"] = AverageTrueRange(
            high=df["high"],
            low=df["low"],
            close=df["close"],
            window=IndicatorConfig.ATR_PERIOD,
        ).average_true_range()

        # =========================
        # MACD
        # =========================

        macd = MACD(
            close=df["close"],
            window_fast=IndicatorConfig.MACD_FAST,
            window_slow=IndicatorConfig.MACD_SLOW,
            window_sign=IndicatorConfig.MACD_SIGNAL,
        )

        df["macd"] = macd.macd()

        df["macd_signal"] = macd.macd_signal()

        df["macd_histogram"] = macd.macd_diff()

        result = IndicatorResult(
            success=True,
            dataframe=df,
            indicators=[
                "ema_20",
                "ema_50",
                "ema_200",
                "rsi",
                "atr",
                "macd",
                "macd_signal",
                "macd_histogram",
            ],
        )

        self.finish()

        return result