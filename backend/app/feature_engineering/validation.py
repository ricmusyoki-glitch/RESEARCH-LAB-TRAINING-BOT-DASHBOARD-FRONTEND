"""
Validation Engine

Validates raw market data before it enters the
Feature Engineering pipeline.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine
from app.core.config import ValidationConfig
from app.core.constants import (
    REQUIRED_MARKET_COLUMNS,
    NUMERIC_MARKET_COLUMNS,
)
from app.core.models import (
    DataQualityReport,
    ValidationResult,
)


class ValidationEngine(BaseEngine):
    """
    Validates incoming market data.

    Responsibilities
    ----------------
    - Validate dataset size
    - Validate required columns
    - Validate missing values
    - Validate duplicate timestamps
    - Validate timestamp ordering
    - Validate OHLC relationships
    - Calculate data quality score
    """

    def validate(self, dataframe: pd.DataFrame) -> ValidationResult:
        """
        Validate market data.

        Parameters
        ----------
        dataframe
            Market data DataFrame.

        Returns
        -------
        ValidationResult
        """

        self.start()

        errors: list[str] = []
        warnings: list[str] = []

        total_rows = len(dataframe)

        missing_values = 0
        duplicate_rows = 0
        invalid_ohlc_rows = 0
        timestamp_errors = 0

        # -------------------------------
        # Dataset size
        # -------------------------------

        if total_rows < ValidationConfig.MINIMUM_DATASET_ROWS:
            errors.append(
                f"Dataset contains only {total_rows} rows."
            )

        # -------------------------------
        # Required columns
        # -------------------------------

        missing_columns = [
            column
            for column in REQUIRED_MARKET_COLUMNS
            if column not in dataframe.columns
        ]

        if missing_columns:
            errors.append(
                "Missing required columns: "
                + ", ".join(missing_columns)
            )

        else:

            # ---------------------------
            # Missing values
            # ---------------------------

            missing_values = int(
                dataframe[
                    list(REQUIRED_MARKET_COLUMNS)
                ].isna().sum().sum()
            ) 

            if (
                missing_values > 0
                and not ValidationConfig.ALLOW_MISSING_VALUES
            ):
                errors.append(
                    f"Dataset contains {missing_values} missing values."
                )

            # ---------------------------
            # Duplicate timestamps
            # ---------------------------

            duplicate_rows = int(
                dataframe["time"].duplicated().sum()
            )

            if (
                duplicate_rows > 0
                and not ValidationConfig.ALLOW_DUPLICATE_TIMESTAMPS
            ):
                errors.append(
                    f"{duplicate_rows} duplicate timestamps found."
                )

            # ---------------------------
            # Timestamp ordering
            # ---------------------------

            if not dataframe["time"].is_monotonic_increasing:
                timestamp_errors += 1
                errors.append(
                    "Timestamps are not in chronological order."
                )

            # ---------------------------
            # Numeric columns
            # ---------------------------

            for column in NUMERIC_MARKET_COLUMNS:

                if not pd.api.types.is_numeric_dtype(
                    dataframe[column]
                ):
                    errors.append(
                        f"{column} is not numeric."
                    )

            # ---------------------------
            # OHLC validation
            # ---------------------------

            invalid_high = dataframe["high"] < dataframe[
                ["open", "close", "low"]
            ].max(axis=1)

            invalid_low = dataframe["low"] > dataframe[
                ["open", "close", "high"]
            ].min(axis=1)

            invalid_ohlc_rows = int(
                (invalid_high | invalid_low).sum()
            )

            if invalid_ohlc_rows > 0:
                errors.append(
                    f"{invalid_ohlc_rows} OHLC rows are invalid."
                )

        # -------------------------------
        # Quality Score
        # -------------------------------

        quality = 100.0

        quality -= (duplicate_rows * ValidationConfig.DUPLICATE_TIMESTAMP_PENALTY)

        quality -= (missing_values * ValidationConfig.MISSING_VALUE_PENALTY)

        quality -= (invalid_ohlc_rows * ValidationConfig.INVALID_OHLC_PENALTY)

        quality -= (timestamp_errors * ValidationConfig.TIMESTAMP_ORDER_PENALTY)

        quality = max(0.0, min(100.0, quality))

        if (
            quality
            < ValidationConfig.DATA_QUALITY_THRESHOLD
        ):
            warnings.append(
                "Dataset quality is below configured threshold."
            )

        report = DataQualityReport(
            total_rows=total_rows,
            missing_values=missing_values,
            duplicate_rows=duplicate_rows,
            invalid_ohlc_rows=invalid_ohlc_rows,
            timestamp_errors=timestamp_errors,
            quality_score=quality,
        )

        result = ValidationResult(
            success=len(errors) == 0,
            errors=errors,
            warnings=warnings,
            report=report,
        )

        self.finish()

        return result