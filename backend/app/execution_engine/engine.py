"""
Execution Engine

Validates whether an M15 entry
is currently available.

Version 2:
- Confidence validation
- Strategy strength validation
- BOS confirmation
- CHOCH confirmation

Author: Rick Research Lab
"""

from __future__ import annotations

from app.core.base import BaseEngine

from app.core.models import (
    ExecutionResult,
    MarketAnalysisResult,
    SignalResult,
    StrategyRankingResult,
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
        features,
    ) -> ExecutionResult:

        self.start()

        reasons: list[str] = []

        # =========================
        # Signal Check
        # =========================

        if signal.signal == "NO TRADE":

            result = ExecutionResult(
                success=True,
                signal=signal.signal,
                entry_valid=False,
                status="WAIT",
                reasons=[
                    "No signal available.",
                ],
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

            result = ExecutionResult(
                success=True,
                signal=signal.signal,
                entry_valid=False,
                status="WAIT",
                reasons=[
                    "Confidence below threshold.",
                ],
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

            result = ExecutionResult(
                success=True,
                signal=signal.signal,
                entry_valid=False,
                status="WAIT",
                reasons=[
                    "Top strategy score too low.",
                ],
            )

            self.finish()

            return result

        # =========================
        # Latest M15 Structure
        # =========================

        latest = features.iloc[-1]

        bullish_bos = bool(
            latest["bullish_bos"]
        )

        bearish_bos = bool(
            latest["bearish_bos"]
        )

        bullish_choch = bool(
            latest["bullish_choch"]
        )

        bearish_choch = bool(
            latest["bearish_choch"]
        )

        # =========================
        # BUY Validation
        # =========================

        if signal.signal == "BUY":

            if not (
                bullish_bos
                or bullish_choch
            ):

                result = ExecutionResult(
                    success=True,
                    signal=signal.signal,
                    entry_valid=False,
                    status="WAIT",
                    reasons=[
                        (
                            "No bullish structure "
                            "confirmation."
                        )
                    ],
                )

                self.finish()

                return result

        # =========================
        # SELL Validation
        # =========================

        if signal.signal == "SELL":

            if not (
                bearish_bos
                or bearish_choch
            ):

                result = ExecutionResult(
                    success=True,
                    signal=signal.signal,
                    entry_valid=False,
                    status="WAIT",
                    reasons=[
                        (
                            "No bearish structure "
                            "confirmation."
                        )
                    ],
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
            (
                f"Top Strategy: "
                f"{top_strategy.strategy_name}"
            )
        )

        reasons.append(
            f"Confidence: {confidence}"
        )

        if bullish_bos:

            reasons.append(
                "Bullish BOS detected."
            )

        if bearish_bos:

            reasons.append(
                "Bearish BOS detected."
            )

        if bullish_choch:

            reasons.append(
                "Bullish CHOCH detected."
            )

        if bearish_choch:

            reasons.append(
                "Bearish CHOCH detected."
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