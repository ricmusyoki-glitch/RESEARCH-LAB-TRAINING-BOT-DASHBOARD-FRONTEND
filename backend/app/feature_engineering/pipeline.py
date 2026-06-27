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