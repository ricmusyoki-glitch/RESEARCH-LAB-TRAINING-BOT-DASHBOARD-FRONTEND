"""
Data Transformers

Transforms market data.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd


class DataTransformer:
    """
    Normalize market data.
    """

    def transform(
        self,
        dataframe: pd.DataFrame,
    ) -> pd.DataFrame:

        return dataframe.copy()