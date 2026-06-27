"""
Strategy Ranking Engine

Ranks strategy scores.

Author: Rick Research Lab
"""

from __future__ import annotations

from app.core.config import StrategyConfig
from app.core.models import (
    StrategyRankingResult,
    StrategyScore,
)


class StrategyRankingEngine:
    """
    Rank strategy scores.
    """

    def rank(
        self,
        scores: list[StrategyScore],
    ) -> StrategyRankingResult:
        """
        Rank strategies by score.
        """

        rankings = sorted(
            scores,
            key=lambda score: score.score,
            reverse=True,
        )

        top_strategies = [
            strategy
            for strategy in rankings
            if (
                strategy.score
                >= StrategyConfig.MIN_STRATEGY_SCORE
            )
        ][
            : StrategyConfig.TOP_STRATEGIES
        ]

        return StrategyRankingResult(
            success=True,
            rankings=rankings,
            top_strategies=top_strategies,
        )