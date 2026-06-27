"""
Regime Detection Engine

Detects:

- TRENDING
- RANGING
- VOLATILE
- CHOPPY

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine
from app.core.config import RegimeConfig
from app.core.models import EngineResponse


class RegimeEngine(BaseEngine):
    """
    Detects market regimes from indicators
    and structure information.
    """

    def detect(
        self,
        dataframe: pd.DataFrame,
    ) -> EngineResponse:

        self.start()

        df = dataframe.copy()

        latest = df.iloc[-1]

        ema20 = latest["ema_20"]
        ema50 = latest["ema_50"]
        ema200 = latest["ema_200"]

        atr = latest["atr"]

        bos_count = int(
            df["bullish_bos"].sum()
            + df["bearish_bos"].sum()
        )

        choch_count = int(
            df["bullish_choch"].sum()
            + df["bearish_choch"].sum()
        )

        regime = "RANGING"

        # ==================================
        # Trending
        # ==================================

        bullish_alignment = (
            ema20 > ema50 > ema200
        )

        bearish_alignment = (
            ema20 < ema50 < ema200
        )

        ema_distance = abs(
            ema20 - ema200
        )

        if (
            (
                bullish_alignment
                or bearish_alignment
            )
            and ema_distance
            > RegimeConfig.TREND_EMA_DISTANCE
            and bos_count
            >= RegimeConfig.BOS_THRESHOLD
        ):
            regime = "TRENDING"

        # ==================================
        # Volatile
        # ==================================

        if (
            atr
            > RegimeConfig.VOLATILITY_THRESHOLD
        ):
            regime = "VOLATILE"

        # ==================================
        # Choppy
        # ==================================

        if (
            choch_count
            >= RegimeConfig.CHOCH_THRESHOLD
        ):
            regime = "CHOPPY"

        result = EngineResponse(
            success=True,
            metadata={
                "regime": regime,
                "bos_count": bos_count,
                "choch_count": choch_count,
                "atr": float(atr),
            },
        )

        self.finish()

        return result