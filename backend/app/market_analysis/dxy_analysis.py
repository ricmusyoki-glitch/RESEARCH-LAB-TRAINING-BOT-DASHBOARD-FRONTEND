"""
DXY Analysis Engine

Analyzes DXY across:

- Weekly
- Daily
- H4

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine
from app.core.config import MarketAnalysisConfig
from app.core.models import (
    DXYAnalysisResult,
    TimeframeAnalysis,
)


class DXYAnalysisEngine(BaseEngine):
    """
    Analyze DXY across multiple
    timeframes.
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

    def _calculate_dollar_strength(
        self,
        weekly: TimeframeAnalysis,
        daily: TimeframeAnalysis,
        h4: TimeframeAnalysis,
    ) -> float:
        """
        Calculate weighted dollar strength.
        """

        score = 50.0

        if weekly.bias == "BULLISH":
            score += (
                100
                * MarketAnalysisConfig.WEEKLY_WEIGHT
            )

        elif weekly.bias == "BEARISH":
            score -= (
                100
                * MarketAnalysisConfig.WEEKLY_WEIGHT
            )

        if daily.bias == "BULLISH":
            score += (
                100
                * MarketAnalysisConfig.DAILY_WEIGHT
            )

        elif daily.bias == "BEARISH":
            score -= (
                100
                * MarketAnalysisConfig.DAILY_WEIGHT
            )

        if h4.bias == "BULLISH":
            score += (
                100
                * MarketAnalysisConfig.H4_WEIGHT
            )

        elif h4.bias == "BEARISH":
            score -= (
                100
                * MarketAnalysisConfig.H4_WEIGHT
            )

        score = max(
            0.0,
            min(
                100.0,
                score,
            ),
        )

        return score

    def analyze(
        self,
        weekly_df: pd.DataFrame,
        daily_df: pd.DataFrame,
        h4_df: pd.DataFrame,
    ) -> DXYAnalysisResult:
        """
        Analyze DXY.
        """

        self.start()

        weekly = self._analyze_timeframe(
            weekly_df,
            "WEEKLY",
        )

        daily = self._analyze_timeframe(
            daily_df,
            "DAILY",
        )

        h4 = self._analyze_timeframe(
            h4_df,
            "H4",
        )

        dollar_strength = (
            self._calculate_dollar_strength(
                weekly,
                daily,
                h4,
            )
        )

        result = DXYAnalysisResult(
            success=True,
            weekly=weekly,
            daily=daily,
            h4=h4,
            h1=TimeframeAnalysis(
                timeframe="N/A",
                bias="N/A",
                regime="N/A",
                confidence=0,
            ),
            dollar_strength=dollar_strength,
        )

        self.finish()

        return result