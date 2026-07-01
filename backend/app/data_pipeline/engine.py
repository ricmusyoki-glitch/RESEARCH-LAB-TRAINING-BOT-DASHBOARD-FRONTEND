"""
Data Pipeline Engine

Orchestrates the data pipeline.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine

from app.core.models import (
    DataPipelineResult,
)

from app.data_pipeline.provider import (
    DataProvider,
)

from app.data_pipeline.validators import (
    DataValidator,
)

from app.data_pipeline.transformers import (
    DataTransformer,
)


class DataPipelineEngine(
    BaseEngine
):
    """
    Execute data pipeline.
    """

    def __init__(self) -> None:

        super().__init__()

        self.provider = DataProvider()

        self.validator = DataValidator()

        self.transformer = (
            DataTransformer()
        )

    def load_data(
        self,
        symbol: str,
        timeframe: str,
    ) -> DataPipelineResult:

        self.start()

        dataframe = (
            self.provider.get_market_data(
                symbol=symbol,
                timeframe=timeframe,
            )
        )

        valid = (
            self.validator.validate(
                dataframe
            )
        )

        if not valid:

            return DataPipelineResult(
                success=False,
                dataframe=dataframe,
                symbol=symbol,
                timeframe=timeframe,
                rows=len(dataframe),
                warnings=[
                    "Invalid market data."
                ],
            )

        dataframe = (
            self.transformer.transform(
                dataframe
            )
        )

        result = DataPipelineResult(
            success=True,
            dataframe=dataframe,
            symbol=symbol,
            timeframe=timeframe,
            rows=len(dataframe),
        )

        self.finish()

        return result