"""
Market Analysis Pipeline

Combines:

- DXY Analysis
- Pair Analysis
- Confidence Analysis

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine
from app.core.models import (
    MarketAnalysisResult,
)

from app.market_analysis.dxy_analysis import (
    DXYAnalysisEngine,
)

from app.market_analysis.pair_analysis import (
    PairAnalysisEngine,
)

from app.market_analysis.confidence_engine import (
    ConfidenceEngine,
)


class MarketAnalysisPipeline(
    BaseEngine
):
    """
    Execute Market Analysis.
    """

    def __init__(self) -> None:

        super().__init__()

        self.dxy_engine = (
            DXYAnalysisEngine()
        )

        self.pair_engine = (
            PairAnalysisEngine()
        )

        self.confidence_engine = (
            ConfidenceEngine()
        )

    def run(
        self,
        pair: str,
        dxy_weekly: pd.DataFrame,
        dxy_daily: pd.DataFrame,
        dxy_h4: pd.DataFrame,
        pair_daily: pd.DataFrame,
        pair_h4: pd.DataFrame,
        pair_h1: pd.DataFrame,
        pair_m15: pd.DataFrame,
    ) -> MarketAnalysisResult:
        """
        Run complete analysis.
        """

        self.start()

        dxy_result = (
            self.dxy_engine.analyze(
                dxy_weekly,
                dxy_daily,
                dxy_h4,
            )
        )

        pair_result = (
            self.pair_engine.analyze(
                pair,
                pair_daily,
                pair_h4,
                pair_h1,
                pair_m15,
            )
        )

        confidence_result = (
            self.confidence_engine.calculate(
                dxy_result,
                pair_result,
            )
        )

        trade_ready = (
            confidence_result.confidence
            >= 70
        )

        result = MarketAnalysisResult(
            success=True,
            dxy_analysis=dxy_result,
            pair_analysis=pair_result,
            confidence_analysis=confidence_result,
            trade_ready=trade_ready,
        )

        self.finish()

        return result