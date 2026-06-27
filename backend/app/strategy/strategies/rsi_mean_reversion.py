"""
RSI Bollinger Mean Reversion Strategy

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


class RsiMeanReversionStrategy(
    BaseStrategy
):
    """
    RSI + Bollinger Mean Reversion.
    """

    name = (
        "RSI Mean Reversion"
    )

    def evaluate(
        self,
        analysis: MarketAnalysisResult,
        features: pd.DataFrame,
    ) -> StrategyScore:

        latest = features.iloc[-1]

        score = 0.0

        reasons: list[str] = []

        rsi = latest["rsi"]

        close = latest["close"]

        bb_upper = latest["bb_upper"]

        bb_lower = latest["bb_lower"]

        if rsi >= 70:

            score += 25

            reasons.append(
                "RSI overbought."
            )

        elif rsi <= 30:

            score += 25

            reasons.append(
                "RSI oversold."
            )

        if close >= bb_upper:

            score += 30

            reasons.append(
                "Price at upper Bollinger band."
            )

        elif close <= bb_lower:

            score += 30

            reasons.append(
                "Price at lower Bollinger band."
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
            score += 20

            reasons.append(
                "High confidence."
            )

        return StrategyScore(
            strategy_name=self.name,
            score=min(score, 100),
            reasons=reasons,
        )