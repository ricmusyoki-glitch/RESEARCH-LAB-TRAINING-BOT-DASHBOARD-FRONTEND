"""
Signal Engine

Generates trading signals from
Market Analysis and Strategy Rankings.

Author: Rick Research Lab
"""

from __future__ import annotations

from app.core.base import BaseEngine

from app.core.models import (
    MarketAnalysisResult,
    SignalResult,
    StrategyRankingResult,
)


class SignalEngine(BaseEngine):
    """
    Generates trading signals.
    """

    def generate(
        self,
        analysis: MarketAnalysisResult,
        rankings: StrategyRankingResult,
    ) -> SignalResult:

        self.start()

        reasons: list[str] = []

        confidence = (
            analysis
            .confidence_analysis
            .confidence
        )

        top_strategy = (
            rankings.top_strategies[0]
        )

        # =========================
        # No Trade Conditions
        # =========================

        if confidence < 70:

            reasons.append(
                "Confidence below threshold."
            )

            result = SignalResult(
                success=True,
                signal="NO TRADE",
                confidence=confidence,
                reasons=reasons,
            )

            self.finish()

            return result

        # =========================
        # Buy / Sell Logic
        # =========================

        bias = (
            analysis
            .pair_analysis
            .overall_bias
        )

        if bias == "BULLISH":

            signal = "BUY"

        elif bias == "BEARISH":

            signal = "SELL"

        else:

            signal = "NO TRADE"

        reasons.append(
            f"Top strategy: "
            f"{top_strategy.strategy_name}"
        )

        reasons.append(
            f"Bias: {bias}"
        )

        result = SignalResult(
            success=True,
            signal=signal,
            confidence=confidence,
            reasons=reasons,
        )

        self.finish()

        return result