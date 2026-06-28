"""
Execution Engine

Validates whether an M15 entry
is currently available.

Author: Rick Research Lab
"""

from __future__ import annotations

from app.core.base import BaseEngine

from app.core.models import (
    ExecutionResult,
    SignalResult,
    StrategyRankingResult,
    MarketAnalysisResult,
)


class ExecutionEngine(BaseEngine):
    """
    Validates M15 execution conditions.
    """

    def validate(
        self,
        signal: SignalResult,
        analysis: MarketAnalysisResult,
        rankings: StrategyRankingResult,
    ) -> ExecutionResult:

        self.start()

        reasons: list[str] = []

        # =========================
        # Signal Check
        # =========================

        if signal.signal == "NO TRADE":

            reasons.append(
                "No signal available."
            )

            result = ExecutionResult(
                success=True,
                signal=signal.signal,
                entry_valid=False,
                status="WAIT",
                reasons=reasons,
            )

            self.finish()

            return result

        # =========================
        # Confidence Check
        # =========================

        confidence = (
            analysis
            .confidence_analysis
            .confidence
        )

        if confidence < 70:

            reasons.append(
                "Confidence below threshold."
            )

            result = ExecutionResult(
                success=True,
                signal=signal.signal,
                entry_valid=False,
                status="WAIT",
                reasons=reasons,
            )

            self.finish()

            return result

        # =========================
        # Strategy Strength
        # =========================

        top_strategy = (
            rankings.top_strategies[0]
        )

        if top_strategy.score < 80:

            reasons.append(
                "Top strategy score too low."
            )

            result = ExecutionResult(
                success=True,
                signal=signal.signal,
                entry_valid=False,
                status="WAIT",
                reasons=reasons,
            )

            self.finish()

            return result

        # =========================
        # Entry Valid
        # =========================

        reasons.append(
            f"Signal: {signal.signal}"
        )

        reasons.append(
            f"Top Strategy: "
            f"{top_strategy.strategy_name}"
        )

        reasons.append(
            f"Confidence: {confidence}"
        )

        result = ExecutionResult(
            success=True,
            signal=signal.signal,
            entry_valid=True,
            status="ENTRY VALID",
            reasons=reasons,
        )

        self.finish()

        return result