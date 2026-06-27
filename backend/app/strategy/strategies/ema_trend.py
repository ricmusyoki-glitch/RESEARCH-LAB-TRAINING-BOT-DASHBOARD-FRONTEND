"""
EMA Trend Following Strategy

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


class EmaTrendFollowingStrategy(
    BaseStrategy
):
    """
    EMA Trend Following Strategy.
    """

    name = (
        "EMA Trend Following"
    )

    def evaluate(
        self,
        analysis: MarketAnalysisResult,
        features: pd.DataFrame,
    ) -> StrategyScore:

        latest = features.iloc[-1]

        score = 0.0

        reasons: list[str] = []

        ema20 = latest["ema_20"]
        ema50 = latest["ema_50"]
        ema200 = latest["ema_200"]

        if (
            ema20 > ema50 > ema200
        ):
            score += 30

            reasons.append(
                "Bullish EMA alignment."
            )

        elif (
            ema20 < ema50 < ema200
        ):
            score += 30

            reasons.append(
                "Bearish EMA alignment."
            )

        if (
            analysis.pair_analysis.h4.regime
            == "TRENDING"
        ):
            score += 25

            reasons.append(
                "Trending regime."
            )

        if (
            analysis.pair_analysis.overall_bias
            != "NEUTRAL"
        ):
            score += 20

            reasons.append(
                "Directional bias present."
            )

        if (
            analysis.confidence_analysis.confidence
            >= 80
        ):
            score += 25

            reasons.append(
                "High confidence."
            )

        return StrategyScore(
            strategy_name=self.name,
            score=min(score, 100),
            reasons=reasons,
        )