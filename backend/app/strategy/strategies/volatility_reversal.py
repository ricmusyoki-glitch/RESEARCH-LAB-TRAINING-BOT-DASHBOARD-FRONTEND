"""
Volatility Spike Reversal Strategy

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


class VolatilityReversalStrategy(
    BaseStrategy
):
    """
    Volatility Spike Reversal Strategy.
    """

    name = (
        "Volatility Spike Reversal"
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

        if rsi >= 80:

            score += 30

            reasons.append(
                "RSI overbought."
            )

        elif rsi <= 20:

            score += 30

            reasons.append(
                "RSI oversold."
            )

        if bool(
            latest["atr_expanding"]
        ):
            score += 25

            reasons.append(
                "ATR expanding."
            )

        if (
            analysis.pair_analysis.h4.regime
            == "VOLATILE"
        ):
            score += 25

            reasons.append(
                "Volatile regime."
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