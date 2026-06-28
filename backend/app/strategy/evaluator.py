"""
Strategy Evaluator

Evaluates all registered strategies
and ranks them.

Author: Rick Research Lab
"""

from __future__ import annotations

from app.core.models import (
    MarketAnalysisResult,
    StrategyRankingResult,
)

from app.strategy.registry import (
    StrategyRegistry,
)

from app.strategy.ranking import (
    StrategyRankingEngine,
)


class StrategyEvaluator:
    """
    Evaluate all strategies.
    """

    def __init__(
        self,
        registry: StrategyRegistry,
    ) -> None:

        self.registry = registry

        self.ranking_engine = (
            StrategyRankingEngine()
        )

    def evaluate(
        self,
        analysis: MarketAnalysisResult,
        features,
    ) -> StrategyRankingResult:
        """
        Evaluate all strategies.
        """

        scores = []

        for strategy in (
            self.registry.strategies
        ):

            score = strategy.evaluate(
                analysis,
                features,
            ) 

            scores.append(
                score
            )

        return (
            self.ranking_engine.rank(
                scores
            )
        )