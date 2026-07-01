"""
Data Provider

Provides market data.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd


class DataProvider:
    """
    Market data provider.
    """

    def get_market_data(
        self,
        symbol: str,
        timeframe: str,
    ) -> pd.DataFrame:

        return pd.DataFrame(
            columns=[
                "time",
                "open",
                "high",
                "low",
                "close",
                "volume",
            ]
        )