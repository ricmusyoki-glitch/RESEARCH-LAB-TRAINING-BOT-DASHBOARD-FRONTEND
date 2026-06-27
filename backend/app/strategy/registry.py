"""
Strategy Registry

Stores all available strategies.

Author: Rick Research Lab
"""

from __future__ import annotations

from app.strategy.base_strategy import (
    BaseStrategy,
)


class StrategyRegistry:
    """
    Registry of available strategies.
    """

    def __init__(self) -> None:

        self._strategies: list[
            BaseStrategy
        ] = []

    def register(
        self,
        strategy: BaseStrategy,
    ) -> None:
        """
        Register a strategy.
        """

        self._strategies.append(
            strategy
        )

    @property
    def strategies(
        self,
    ) -> list[BaseStrategy]:
        """
        Return all strategies.
        """

        return self._strategies