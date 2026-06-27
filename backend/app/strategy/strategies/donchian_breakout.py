"""
Donchian Breakout Strategy

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.models import (
    MarketAnalysisResult,
    StrategyScore,
)

from app.strategy.base_strategy import (
    BaseStrategy,
)


class DonchianBreakoutStrategy(
    BaseStrategy
):
    """
    Donchian Breakout Strategy.
    """

    name = (
        "Donchian Breakout"
    )

    def evaluate(
        self,
        analysis: MarketAnalysisResult,
        features: pd.DataFrame,
    ) -> StrategyScore:

        latest = features.iloc[-1]

        score = 0.0

        reasons: list[str] = []

        close = latest["close"]

        donchian_high = (
            latest["donchian_high"]
        )

        donchian_low = (
            latest["donchian_low"]
        )

        # =========================
        # Breakout Detection
        # =========================

        if close >= donchian_high:

            score += 35

            reasons.append(
                "Upper Donchian breakout."
            )

        elif close <= donchian_low:

            score += 35

            reasons.append(
                "Lower Donchian breakout."
            )

        # =========================
        # Trending Regime
        # =========================

        if (
            analysis.pair_analysis.h4.regime
            == "TRENDING"
        ):
            score += 25

            reasons.append(
                "Trending regime."
            )

        # =========================
        # Directional Bias
        # =========================

        if (
            analysis.pair_analysis
            .overall_bias
            != "NEUTRAL"
        ):
            score += 20

            reasons.append(
                "Directional bias present."
            )

        # =========================
        # Confidence
        # =========================

        if (
            analysis
            .confidence_analysis
            .confidence
            >= 80
        ):
            score += 20

            reasons.append(
                "High confidence."
            )

        return StrategyScore(
            strategy_name=self.name,
            score=min(score, 100),
            reasons=reasons,
        )