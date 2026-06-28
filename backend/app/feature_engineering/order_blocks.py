"""
Order Block Engine

Detects bullish and bearish
order blocks.

Author: Rick Research Lab
"""

from __future__ import annotations

import pandas as pd

from app.core.base import BaseEngine

from app.core.models import (
    OrderBlockResult,
)


class OrderBlockEngine(
    BaseEngine
):
    """
    Detect order blocks.
    """

    def detect(
        self,
        dataframe: pd.DataFrame,
    ) -> OrderBlockResult:

        self.start()

        df = dataframe.copy()

        order_blocks: list[dict] = []

        bullish_ob_count = 0
        bearish_ob_count = 0

        # ==================================
        # Bullish Order Blocks
        # ==================================

        if "bullish_bos" in df.columns:

            bullish_bos_rows = (
                df.index[
                    df["bullish_bos"]
                ].tolist()
            )

            for bos_idx in bullish_bos_rows:

                bos_position = (
                    df.index.get_loc(
                        bos_idx
                    )
                )

                for i in range(
                    bos_position - 1,
                    -1,
                    -1,
                ):

                    candle = df.iloc[i]

                    if (
                        candle["close"]
                        < candle["open"]
                    ):

                        bullish_ob_count += 1

                        order_blocks.append(
                            {
                                "type": "bullish",
                                "high": candle["high"],
                                "low": candle["low"],
                                "index": i,
                            }
                        )

                        break

        # ==================================
        # Bearish Order Blocks
        # ==================================

        if "bearish_bos" in df.columns:

            bearish_bos_rows = (
                df.index[
                    df["bearish_bos"]
                ].tolist()
            )

            for bos_idx in bearish_bos_rows:

                bos_position = (
                    df.index.get_loc(
                        bos_idx
                    )
                )

                for i in range(
                    bos_position - 1,
                    -1,
                    -1,
                ):

                    candle = df.iloc[i]

                    if (
                        candle["close"]
                        > candle["open"]
                    ):

                        bearish_ob_count += 1

                        order_blocks.append(
                            {
                                "type": "bearish",
                                "high": candle["high"],
                                "low": candle["low"],
                                "index": i,
                            }
                        )

                        break

        metadata = {
            "bullish_order_blocks":
                bullish_ob_count,
            "bearish_order_blocks":
                bearish_ob_count,
            "total_order_blocks":
                len(order_blocks),
        }

        result = OrderBlockResult(
            success=True,
            dataframe=df,
            order_blocks=order_blocks,
            metadata=metadata,
        )

        self.finish()

        return result