"""
Support Resistance Fade Strategy

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


class SupportResistanceFadeStrategy(
    BaseStrategy
):
    """
    Support and Resistance Fade Strategy.
    """

    name = (
        "Support Resistance Fade"
    )

    def evaluate(
        self,
        analysis: MarketAnalysisResult,
        features: pd.DataFrame,
    ) -> StrategyScore:

        latest = features.iloc[-1]

        score = 0.0

        reasons: list[str] = []

        if bool(
            latest["swing_high"]
        ):
            score += 30

            reasons.append(
                "Resistance interaction."
            )

        if bool(
            latest["swing_low"]
        ):
            score += 30

            reasons.append(
                "Support interaction."
            )

        if (
            analysis.pair_analysis.h4.regime
            == "RANGING"
        ):
            score += 25

            reasons.append(
                "Ranging regime."
            )

        if (
            analysis
            .confidence_analysis
            .confidence
            >= 80
        ):
            score += 15

            reasons.append(
                "High confidence."
            )

        return StrategyScore(
            strategy_name=self.name,
            score=min(score, 100),
            reasons=reasons,
        )