"""
Fair Value Gap Engine

Detects bullish and bearish FVGs.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine

from app.core.models import (
    FVGResult,
)


class FVGEngine(
    BaseEngine
):
    """
    Detect Fair Value Gaps.
    """

    def detect(
        self,
        dataframe: pd.DataFrame,
    ) -> FVGResult:

        self.start()

        df = dataframe.copy()

        gaps: list[dict] = []

        bullish_fvg_count = 0
        bearish_fvg_count = 0

        for i in range(
            2,
            len(df),
        ):

            candle_1_high = df.iloc[
                i - 2
            ]["high"]

            candle_1_low = df.iloc[
                i - 2
            ]["low"]

            candle_3_high = df.iloc[
                i
            ]["high"]

            candle_3_low = df.iloc[
                i
            ]["low"]

            # =====================
            # Bullish FVG
            # =====================

            if (
                candle_3_low
                > candle_1_high
            ):

                bullish_fvg_count += 1

                gaps.append(
                    {
                        "type": "bullish",
                        "fvg_high": candle_3_low,
                        "fvg_low": candle_1_high,
                        "gap_size": (
                            candle_3_low
                            - candle_1_high
                        ),
                    }
                )

            # =====================
            # Bearish FVG
            # =====================

            elif (
                candle_3_high
                < candle_1_low
            ):

                bearish_fvg_count += 1

                gaps.append(
                    {
                        "type": "bearish",
                        "fvg_high": candle_1_low,
                        "fvg_low": candle_3_high,
                        "gap_size": (
                            candle_1_low
                            - candle_3_high
                        ),
                    }
                )

        metadata = {
            "bullish_fvg":
                bullish_fvg_count,
            "bearish_fvg":
                bearish_fvg_count,
            "total_fvg":
                len(gaps),
        }

        result = FVGResult(
            success=True,
            dataframe=df,
            gaps=gaps,
            metadata=metadata,
        )

        self.finish()

        return result