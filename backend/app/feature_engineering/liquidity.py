"""
Liquidity Engine

Detects liquidity zones and sweeps.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine

from app.core.models import (
    LiquidityResult,
)


class LiquidityEngine(
    BaseEngine
):
    """
    Detect liquidity zones.
    """

    def detect(
        self,
        dataframe: pd.DataFrame,
    ) -> LiquidityResult:

        self.start()

        df = dataframe.copy()

        liquidity_zones: list[float] = []

        equal_highs = 0
        equal_lows = 0

        buy_side_liquidity = 0
        sell_side_liquidity = 0

        tolerance = 0.001

        # ==================================
        # Equal Highs
        # ==================================

        if "swing_high" in df.columns:

            swing_highs = df.loc[
                df["swing_high"],
                "high",
            ].tolist()

            for i in range(
                1,
                len(swing_highs),
            ):

                if abs(
                    swing_highs[i]
                    - swing_highs[i - 1]
                ) <= tolerance:

                    equal_highs += 1

                    liquidity_zones.append(
                        swing_highs[i]
                    )

                    buy_side_liquidity += 1

        # ==================================
        # Equal Lows
        # ==================================

        if "swing_low" in df.columns:

            swing_lows = df.loc[
                df["swing_low"],
                "low",
            ].tolist()

            for i in range(
                1,
                len(swing_lows),
            ):

                if abs(
                    swing_lows[i]
                    - swing_lows[i - 1]
                ) <= tolerance:

                    equal_lows += 1

                    liquidity_zones.append(
                        swing_lows[i]
                    )

                    sell_side_liquidity += 1

        metadata = {
            "equal_highs": equal_highs,
            "equal_lows": equal_lows,
            "buy_side_liquidity":
                buy_side_liquidity,
            "sell_side_liquidity":
                sell_side_liquidity,
        }

        result = LiquidityResult(
            success=True,
            dataframe=df,
            liquidity_zones=liquidity_zones,
            metadata=metadata,
        )

        self.finish()

        return result