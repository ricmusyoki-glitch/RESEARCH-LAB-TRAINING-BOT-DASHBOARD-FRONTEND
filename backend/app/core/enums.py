"""
Application Enums

Strongly typed enumerations shared across the
Research Lab.

Using enums instead of raw strings improves:

- Readability
- Type safety
- IDE autocompletion
- Maintainability

Author: Rick Research Lab
"""

from enum import Enum


class TradingSymbol(str, Enum):
    """Supported trading instruments."""

    EURUSD = "EURUSD"
    GBPUSD = "GBPUSD"
    USDJPY = "USDJPY"
    XAUUSD = "XAUUSD"
    XAGUSD = "XAGUSD"


class TimeFrame(str, Enum):
    """Supported chart timeframes."""

    M1 = "M1"
    M5 = "M5"
    M15 = "M15"
    M30 = "M30"
    H1 = "H1"
    H4 = "H4"
    D1 = "D1"
    W1 = "W1"


class MarketSession(str, Enum):
    """Trading sessions."""

    SYDNEY = "SYDNEY"
    TOKYO = "TOKYO"
    LONDON = "LONDON"
    NEW_YORK = "NEW_YORK"


class MarketRegime(str, Enum):
    """Market conditions."""

    TRENDING = "TRENDING"
    RANGING = "RANGING"
    VOLATILE = "VOLATILE"


class TrendDirection(str, Enum):
    """Market trend."""

    BULLISH = "BULLISH"
    BEARISH = "BEARISH"
    NEUTRAL = "NEUTRAL"


class SignalDirection(str, Enum):
    """Signal direction."""

    BUY = "BUY"
    SELL = "SELL"
    HOLD = "HOLD"


class TradeStatus(str, Enum):
    """Paper trade status."""

    PENDING = "PENDING"
    OPEN = "OPEN"
    CLOSED = "CLOSED"
    CANCELLED = "CANCELLED"


class ValidationStatus(str, Enum):
    """Validation result."""

    PASSED = "PASSED"
    FAILED = "FAILED"
    WARNING = "WARNING"


class LogLevel(str, Enum):
    """Application logging levels."""

    DEBUG = "DEBUG"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    CRITICAL = "CRITICAL"