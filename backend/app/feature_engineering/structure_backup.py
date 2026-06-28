"""
Structure Engine

Detects market structure features.

Version 2:
- Swing Highs
- Swing Lows
- Bullish BOS
- Bearish BOS
- Bullish CHOCH
- Bearish CHOCH

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine
from app.core.config import StructureConfig
from app.core.models import StructureResult


class StructureEngine(BaseEngine):
    """
    Detect market structure.
    """

    def detect(
        self,
        dataframe: pd.DataFrame,
    ) -> StructureResult:
        """
        Detect market structure features.
        """

        self.start()

        df = dataframe.copy()

        lookback = StructureConfig.SWING_LOOKBACK

        # ==================================
        # Swing Detection
        # ==================================

        df["swing_high"] = False
        df["swing_low"] = False

        for i in range(
            lookback,
            len(df) - lookback,
        ):

            current_high = df.iloc[i]["high"]

            left_highs = df.iloc[
                i - lookback : i
            ]["high"]

            right_highs = df.iloc[
                i + 1 : i + lookback + 1
            ]["high"]

            if (
                current_high > left_highs.max()
                and current_high > right_highs.max()
            ):
                df.loc[
                    df.index[i],
                    "swing_high",
                ] = True

            current_low = df.iloc[i]["low"]

            left_lows = df.iloc[
                i - lookback : i
            ]["low"]

            right_lows = df.iloc[
                i + 1 : i + lookback + 1
            ]["low"]

            if (
                current_low < left_lows.min()
                and current_low < right_lows.min()
            ):
                df.loc[
                    df.index[i],
                    "swing_low",
                ] = True

        # ==================================
        # BOS Columns
        # ==================================

        df["bullish_bos"] = False
        df["bearish_bos"] = False

        # ==================================
        # CHOCH Columns
        # ==================================

        df["bullish_choch"] = False
        df["bearish_choch"] = False

        # ==================================
        # BOS Detection
        # ==================================

        swing_high_indices = (
            df.index[df["swing_high"]]
            .tolist()
        )

        swing_low_indices = (
            df.index[df["swing_low"]]
            .tolist()
        )

        for swing_index in swing_high_indices:

            swing_high_price = df.loc[
                swing_index,
                "high",
            ]

            future_candles = df.loc[
                swing_index + 1 :
            ]

            broken = future_candles[
                future_candles["close"]
                > swing_high_price
            ]

            if not broken.empty:

                bos_index = broken.index[0]

                df.loc[
                    bos_index,
                    "bullish_bos",
                ] = True

        for swing_index in swing_low_indices:

            swing_low_price = df.loc[
                swing_index,
                "low",
            ]

            future_candles = df.loc[
                swing_index + 1 :
            ]

            broken = future_candles[
                future_candles["close"]
                < swing_low_price
            ]

            if not broken.empty:

                bos_index = broken.index[0]

                df.loc[
                    bos_index,
                    "bearish_bos",
                ] = True

        # ==================================
        # CHOCH Detection
        # ==================================

        bullish_seen = False
        bearish_seen = False

        for idx in df.index:

            if df.loc[idx, "bullish_bos"]:
                bullish_seen = True

            if (
                bullish_seen
                and df.loc[idx, "bearish_bos"]
            ):
                df.loc[
                    idx,
                    "bearish_choch",
                ] = True

            if df.loc[idx, "bearish_bos"]:
                bearish_seen = True

            if (
                bearish_seen
                and df.loc[idx, "bullish_bos"]
            ):
                df.loc[
                    idx,
                    "bullish_choch",
                ] = True

        result = StructureResult(
            success=True,
            dataframe=df,
            structures=[
                "swing_high",
                "swing_low",
                "bullish_bos",
                "bearish_bos",
                "bullish_choch",
                "bearish_choch",
            ],
        )

        self.finish()

        return result