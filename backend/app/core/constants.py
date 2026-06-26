"""
Application Constants

Constants shared across the Research Lab.

These values define supported application domains and
should rarely change.

Author: Rick Research Lab
"""

from typing import Final


# ==========================
# Supported Trading Symbols
# ==========================

SUPPORTED_SYMBOLS: Final[tuple[str, ...]] = (
    "EURUSD",
    "GBPUSD",
    "USDJPY",
    "XAUUSD",
    "XAGUSD",
)


# ==========================
# Supported Timeframes
# ==========================

SUPPORTED_TIMEFRAMES: Final[tuple[str, ...]] = (
    "M1",
    "M5",
    "M15",
    "M30",
    "H1",
    "H4",
    "D1",
    "W1",
)


# ==========================
# Trading Sessions
# ==========================

SUPPORTED_SESSIONS: Final[tuple[str, ...]] = (
    "SYDNEY",
    "TOKYO",
    "LONDON",
    "NEW_YORK",
)


# ==========================
# Market Regimes
# ==========================

SUPPORTED_MARKET_REGIMES: Final[tuple[str, ...]] = (
    "TRENDING",
    "RANGING",
    "VOLATILE",
)


# ==========================
# Trend Directions
# ==========================

TREND_DIRECTIONS: Final[tuple[str, ...]] = (
    "BULLISH",
    "BEARISH",
    "NEUTRAL",
)


# ==========================
# Candle Columns
# ==========================

REQUIRED_MARKET_COLUMNS: Final[tuple[str, ...]] = (
    "time",
    "open",
    "high",
    "low",
    "close",
    "volume",
)


# ==========================
# Numeric Columns
# ==========================

NUMERIC_MARKET_COLUMNS: Final[tuple[str, ...]] = (
    "open",
    "high",
    "low",
    "close",
    "volume",
)