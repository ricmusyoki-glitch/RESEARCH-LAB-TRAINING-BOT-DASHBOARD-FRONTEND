"""
Cleaning Engine

Cleans validated market data before it enters
feature engineering and machine learning.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine
from app.core.config import CleaningConfig
from app.core.models import CleaningResult


class CleaningEngine(BaseEngine):
    """
    Cleans validated market data.

    Responsibilities
    ----------------
    - Normalize column names
    - Convert timestamps
    - Remove duplicate timestamps
    - Sort timestamps
    - Convert numeric columns
    - Reset index
    """

    NUMERIC_COLUMNS = (
        "open",
        "high",
        "low",
        "close",
        "volume",
    )

    def clean(
        self,
        dataframe: pd.DataFrame,
    ) -> CleaningResult:
        """
        Clean market data.

        Parameters
        ----------
        dataframe
            Validated market data.

        Returns
        -------
        CleaningResult
        """

        self.start()

        original_rows = len(dataframe)

        cleaned = dataframe.copy()

        # ---------------------------------
        # Normalize column names
        # ---------------------------------

        cleaned.columns = [
            column.strip().lower()
            for column in cleaned.columns
        ]

        # ---------------------------------
        # Convert timestamp column
        # ---------------------------------

        cleaned["time"] = pd.to_datetime(
            cleaned["time"],
            errors="coerce",
        )

        # ---------------------------------
        # Remove duplicate timestamps
        # ---------------------------------

        if CleaningConfig.REMOVE_DUPLICATES:

            cleaned = cleaned.drop_duplicates(
                subset=["time"],
                keep="first",
            )

        # ---------------------------------
        # Sort timestamps
        # ---------------------------------

        if CleaningConfig.SORT_BY_TIMESTAMP:

            cleaned = cleaned.sort_values(
                by="time"
            )

        # ---------------------------------
        # Numeric conversion
        # ---------------------------------

        for column in self.NUMERIC_COLUMNS:

            cleaned[column] = pd.to_numeric(
                cleaned[column],
                errors="coerce",
            )

        # ---------------------------------
        # Remove invalid rows
        # ---------------------------------

        if CleaningConfig.DROP_INVALID_ROWS:

            cleaned = cleaned.dropna()

        # ---------------------------------
        # Reset index
        # ---------------------------------

        if CleaningConfig.RESET_INDEX:

            cleaned = cleaned.reset_index(
                drop=True
            )

        cleaned_rows = len(cleaned)

        removed_rows = (
            original_rows
            - cleaned_rows
        )

        result = CleaningResult(
            success=True,
            original_rows=original_rows,
            cleaned_rows=cleaned_rows,
            removed_rows=removed_rows,
            dataframe=cleaned,
        )

        self.finish()

        return result