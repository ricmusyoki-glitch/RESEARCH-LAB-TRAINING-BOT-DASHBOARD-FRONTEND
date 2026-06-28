"""
Support Resistance Engine

Detects major support and resistance
zones from market structure.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine

from app.core.models import (
    SupportResistanceResult,
)


class SupportResistanceEngine(
    BaseEngine
):
    """
    Detect support and resistance.
    """

    def detect(
        self,
        dataframe: pd.DataFrame,
    ) -> SupportResistanceResult:

        self.start()

        df = dataframe.copy()

        levels: list[float] = []

        # =========================
        # Support Levels
        # =========================

        if "swing_low" in df.columns:

            support_levels = (
                df.loc[
                    df["swing_low"],
                    "low",
                ]
                .tolist()
            )

            levels.extend(
                support_levels
            )

        # =========================
        # Resistance Levels
        # =========================

        if "swing_high" in df.columns:

            resistance_levels = (
                df.loc[
                    df["swing_high"],
                    "high",
                ]
                .tolist()
            )

            levels.extend(
                resistance_levels
            )

        metadata = {
            "major_supports": (
                len(
                    df.loc[
                        df.get(
                            "swing_low",
                            False,
                        )
                    ]
                )
                if "swing_low"
                in df.columns
                else 0
            ),
            "major_resistances": (
                len(
                    df.loc[
                        df.get(
                            "swing_high",
                            False,
                        )
                    ]
                )
                if "swing_high"
                in df.columns
                else 0
            ),
        }

        result = (
            SupportResistanceResult(
                success=True,
                dataframe=df,
                levels=levels,
                metadata=metadata,
            )
        )

        self.finish()

        return result