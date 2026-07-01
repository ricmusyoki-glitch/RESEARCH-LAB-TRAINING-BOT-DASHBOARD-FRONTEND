"""
Data Validators

Validates market data.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd


class DataValidator:
    """
    Validate market data.
    """

    REQUIRED_COLUMNS = [
        "time",
        "open",
        "high",
        "low",
        "close",
        "volume",
    ]

    def validate(
        self,
        dataframe: pd.DataFrame,
    ) -> bool:

        if dataframe.empty:
            return False

        for column in self.REQUIRED_COLUMNS:

            if column not in dataframe.columns:
                return False

        return True