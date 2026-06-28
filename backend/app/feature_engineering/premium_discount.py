"""
Premium Discount Engine

Detects premium and discount zones
using market structure.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine

from app.core.models import (
    PremiumDiscountResult,
)


class PremiumDiscountEngine(
    BaseEngine
):
    """
    Detect premium and discount zones.
    """

    def detect(
        self,
        dataframe: pd.DataFrame,
    ) -> PremiumDiscountResult:

        self.start()

        df = dataframe.copy()

        zones: list[dict] = []

        if (
            "swing_high" not in df.columns
            or "swing_low" not in df.columns
        ):

            result = PremiumDiscountResult(
                success=True,
                dataframe=df,
                zones=[],
                metadata={},
            )

            self.finish()

            return result

        swing_highs = df.loc[
            df["swing_high"],
            "high",
        ]

        swing_lows = df.loc[
            df["swing_low"],
            "low",
        ]

        if (
            swing_highs.empty
            or swing_lows.empty
        ):

            result = PremiumDiscountResult(
                success=True,
                dataframe=df,
                zones=[],
                metadata={},
            )

            self.finish()

            return result

        range_high = float(
            swing_highs.iloc[-1]
        )

        range_low = float(
            swing_lows.iloc[-1]
        )

        equilibrium = (
            range_high
            + range_low
        ) / 2

        current_price = float(
            df.iloc[-1]["close"]
        )

        zone = (
            "premium"
            if current_price > equilibrium
            else "discount"
        )

        zones.append(
            {
                "range_high": range_high,
                "range_low": range_low,
                "equilibrium": equilibrium,
                "current_price": current_price,
                "zone": zone,
            }
        )

        metadata = {
            "range_high": range_high,
            "range_low": range_low,
            "equilibrium": equilibrium,
            "current_zone": zone,
        }

        result = PremiumDiscountResult(
            success=True,
            dataframe=df,
            zones=zones,
            metadata=metadata,
        )

        self.finish()

        return result