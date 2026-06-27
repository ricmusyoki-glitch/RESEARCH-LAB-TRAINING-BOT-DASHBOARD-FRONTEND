"""
Pair Analysis Engine

Analyzes:

- Daily
- H4
- H1
- M15

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine
from app.core.models import (
    PairAnalysisResult,
    TimeframeAnalysis,
)


class PairAnalysisEngine(BaseEngine):
    """
    Analyze a trading pair across
    multiple timeframes.
    """

    def _analyze_timeframe(
        self,
        dataframe: pd.DataFrame,
        timeframe: str,
    ) -> TimeframeAnalysis:
        """
        Analyze a single timeframe.
        """

        latest = dataframe.iloc[-1]

        ema20 = latest["ema_20"]
        ema50 = latest["ema_50"]
        ema200 = latest["ema_200"]

        bullish_bos = bool(
            dataframe["bullish_bos"].iloc[-1]
        )

        bearish_bos = bool(
            dataframe["bearish_bos"].iloc[-1]
        )

        regime = "UNKNOWN"

        if "regime" in dataframe.columns:
            regime = str(
                dataframe["regime"].iloc[-1]
            )

        bias = "NEUTRAL"

        confidence = 50.0

        if (
            ema20 > ema50 > ema200
            and bullish_bos
        ):
            bias = "BULLISH"
            confidence = 80.0

        elif (
            ema20 < ema50 < ema200
            and bearish_bos
        ):
            bias = "BEARISH"
            confidence = 80.0

        return TimeframeAnalysis(
            timeframe=timeframe,
            bias=bias,
            regime=regime,
            confidence=confidence,
        )

    def _calculate_overall_bias(
        self,
        daily: TimeframeAnalysis,
        h4: TimeframeAnalysis,
        h1: TimeframeAnalysis,
    ) -> tuple[str, float]:
        """
        Determine overall pair bias.
        """

        bullish_votes = sum(
            [
                daily.bias == "BULLISH",
                h4.bias == "BULLISH",
                h1.bias == "BULLISH",
            ]
        )

        bearish_votes = sum(
            [
                daily.bias == "BEARISH",
                h4.bias == "BEARISH",
                h1.bias == "BEARISH",
            ]
        )

        if bullish_votes >= 2:
            return "BULLISH", 80.0

        if bearish_votes >= 2:
            return "BEARISH", 80.0

        return "NEUTRAL", 50.0

    def analyze(
        self,
        pair: str,
        daily_df: pd.DataFrame,
        h4_df: pd.DataFrame,
        h1_df: pd.DataFrame,
        m15_df: pd.DataFrame,
    ) -> PairAnalysisResult:
        """
        Analyze a trading pair.
        """

        self.start()

        daily = self._analyze_timeframe(
            daily_df,
            "DAILY",
        )

        h4 = self._analyze_timeframe(
            h4_df,
            "H4",
        )

        h1 = self._analyze_timeframe(
            h1_df,
            "H1",
        )

        m15 = self._analyze_timeframe(
            m15_df,
            "M15",
        )

        overall_bias, confidence = (
            self._calculate_overall_bias(
                daily,
                h4,
                h1,
            )
        )

        result = PairAnalysisResult(
            success=True,
            pair=pair,
            daily=daily,
            h4=h4,
            h1=h1,
            m15=m15,
            overall_bias=overall_bias,
            confidence=confidence,
        )

        self.finish()

        return result