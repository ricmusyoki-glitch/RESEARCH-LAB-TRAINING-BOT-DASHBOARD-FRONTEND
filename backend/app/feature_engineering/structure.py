"""
Structure Engine

Detects market structure features.

Version 1:
- Swing Highs
- Swing Lows

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

        self.start()

        df = dataframe.copy()

        lookback = (
            StructureConfig.SWING_LOOKBACK
        )

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

        result = StructureResult(
            success=True,
            dataframe=df,
            structures=[
                "swing_high",
                "swing_low",
            ],
        )

        self.finish()

        return result