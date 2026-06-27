"""
Confidence Engine

Calculates trade confidence from
market analysis outputs.

Author: Rick Research Lab
"""

from __future__ import annotations

from app.core.base import BaseEngine
from app.core.models import (
    ConfidenceResult,
    DXYAnalysisResult,
    PairAnalysisResult,
)


class ConfidenceEngine(BaseEngine):
    """
    Calculates confidence from
    market analysis outputs.
    """

    def calculate(
        self,
        dxy_result: DXYAnalysisResult,
        pair_result: PairAnalysisResult,
    ) -> ConfidenceResult:
        """
        Calculate confidence score.
        """

        self.start()

        score = 50.0

        reasons: list[str] = []

        # ==================================
        # Pair Bias
        # ==================================

        if pair_result.overall_bias != "NEUTRAL":

            score += 15

            reasons.append(
                "Pair bias established."
            )

        # ==================================
        # Timeframe Alignment
        # ==================================

        biases = [
            pair_result.daily.bias,
            pair_result.h4.bias,
            pair_result.h1.bias,
        ]

        unique_biases = set(biases)

        if len(unique_biases) == 1:

            score += 20

            reasons.append(
                "Timeframes aligned."
            )

        # ==================================
        # H4 Regime
        # ==================================

        if (
            pair_result.h4.regime
            == "TRENDING"
        ):
            score += 10

            reasons.append(
                "Trending regime."
            )

        elif (
            pair_result.h4.regime
            == "CHOPPY"
        ):
            score -= 25

            reasons.append(
                "Choppy market."
            )

        # ==================================
        # DXY Context
        # ==================================

        if (
            dxy_result.dollar_strength
            >= 70
        ):
            score += 5

            reasons.append(
                "Strong dollar context."
            )

        elif (
            dxy_result.dollar_strength
            <= 30
        ):
            score += 5

            reasons.append(
                "Weak dollar context."
            )

        score = max(
            0.0,
            min(
                100.0,
                score,
            ),
        )

        result = ConfidenceResult(
            success=True,
            confidence=score,
            reasons=reasons,
        )

        self.finish()

        return result