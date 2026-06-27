"""
Base Strategy

Every strategy must inherit from this class.

Author: Rick Research Lab
"""

from __future__ import annotations

from abc import ABC
from abc import abstractmethod

import pandas as pd

from app.core.models import (
    MarketAnalysisResult,
    StrategyScore,
)


class BaseStrategy(ABC):
    """
    Base strategy contract.
    """

    name: str = "Base Strategy"

    @abstractmethod
    def evaluate(
    self,
    analysis: MarketAnalysisResult,
    features: pd.DataFrame,
    ) -> StrategyScore:
        """
        Evaluate strategy suitability
        for current market conditions.
        """

        raise NotImplementedError