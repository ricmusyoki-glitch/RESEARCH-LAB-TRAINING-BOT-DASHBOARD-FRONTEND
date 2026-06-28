"""
Feature Engineering Pipeline

Orchestrates the entire feature engineering
workflow.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine
from app.core.models import PipelineResult

from app.feature_engineering.validation import (
    ValidationEngine,
)

from app.feature_engineering.cleaning import (
    CleaningEngine,
)

from app.feature_engineering.indicators import (
    IndicatorEngine,
)

from app.feature_engineering.structure import (
    StructureEngine,
)

from app.feature_engineering.support_resistance import (
    SupportResistanceEngine,
)

from app.feature_engineering.liquidity import (
    LiquidityEngine,
)

from app.feature_engineering.fvg import (
    FVGEngine,
)

from app.feature_engineering.order_blocks import (
    OrderBlockEngine,
)

from app.feature_engineering.premium_discount import (
    PremiumDiscountEngine,
)

from app.feature_engineering.regime import (
    RegimeEngine,
)


class FeatureEngineeringPipeline(
    BaseEngine
):
    """
    Executes the complete feature
    engineering workflow.
    """

    def __init__(self) -> None:

        super().__init__()

        self.validation_engine = (
            ValidationEngine()
        )

        self.cleaning_engine = (
            CleaningEngine()
        )

        self.indicator_engine = (
            IndicatorEngine()
        )

        self.structure_engine = (
            StructureEngine()
        )

        self.support_resistance_engine = (
            SupportResistanceEngine()
        )

        self.liquidity_engine = (
            LiquidityEngine()
        )

        self.fvg_engine = (
            FVGEngine()
        )

        self.order_block_engine = (
            OrderBlockEngine()
        )

        self.premium_discount_engine = (
            PremiumDiscountEngine()
        )

        self.regime_engine = (
            RegimeEngine()
        )

    def run(
        self,
        dataframe: pd.DataFrame,
    ) -> PipelineResult:
        """
        Execute the full pipeline.
        """

        self.start()

        completed_steps: list[str] = []

        # ==================================
        # Validation
        # ==================================

        validation_result = (
            self.validation_engine.validate(
                dataframe
            )
        )

        if not validation_result.success:

            return PipelineResult(
                success=False,
                dataframe=dataframe,
                completed_steps=[],
                warnings=validation_result.errors,
            )

        completed_steps.append(
            "validation"
        )

        # ==================================
        # Cleaning
        # ==================================

        cleaning_result = (
            self.cleaning_engine.clean(
                dataframe
            )
        )

        df = cleaning_result.dataframe

        completed_steps.append(
            "cleaning"
        )

        # ==================================
        # Indicators
        # ==================================

        indicator_result = (
            self.indicator_engine.calculate(
                df
            )
        )

        df = indicator_result.dataframe

        completed_steps.append(
            "indicators"
        )

        # ==================================
        # Structure
        # ==================================

        structure_result = (
            self.structure_engine.detect(
                df
            )
        )

        df = structure_result.dataframe

        completed_steps.append(
            "structure"
        )

        # ==================================
        # Support Resistance
        # ==================================

        support_result = (
            self.support_resistance_engine.detect(
                df
            )
        )

        df = support_result.dataframe

        completed_steps.append(
            "support_resistance"
        )

        # ==================================
        # Liquidity
        # ==================================

        liquidity_result = (
            self.liquidity_engine.detect(
                df
            )
        )

        df = liquidity_result.dataframe

        completed_steps.append(
            "liquidity"
        )

        # ==================================
        # FVG
        # ==================================

        fvg_result = (
            self.fvg_engine.detect(
                df
            )
        )

        df = fvg_result.dataframe

        completed_steps.append(
            "fvg"
        )

        # ==================================
        # Order Blocks
        # ==================================

        order_block_result = (
            self.order_block_engine.detect(
                df
            )
        )

        df = order_block_result.dataframe

        completed_steps.append(
            "order_blocks"
        )

        # ==================================
        # Premium Discount
        # ==================================

        premium_discount_result = (
            self.premium_discount_engine.detect(
                df
            )
        )

        df = premium_discount_result.dataframe

        completed_steps.append(
            "premium_discount"
        )

        # ==================================
        # Regime
        # ==================================

        regime_result = (
            self.regime_engine.detect(
                df
            )
        )

        completed_steps.append(
            "regime"
        )

        result = PipelineResult(
            success=True,
            dataframe=df,
            completed_steps=completed_steps,
            metadata=regime_result.metadata,
        )

        self.finish()

        return result