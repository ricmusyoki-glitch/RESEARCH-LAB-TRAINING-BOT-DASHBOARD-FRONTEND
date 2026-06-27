"""
Application Configuration

Centralized configuration for the Research Lab.

Unlike constants, these values are intended to be
tuned as the application evolves.

Author: Rick Research Lab
"""

from dataclasses import dataclass

from app.core.enums import LogLevel


# ==========================================================
# Validation Configuration
# ==========================================================


@dataclass(frozen=True)
class ValidationConfig:
    """
    Validation configuration.

    Controls the behaviour of the validation engine.
    """

    # ----------------------------
    # Dataset
    # ----------------------------

    MINIMUM_DATASET_ROWS: int = 200

    DATA_QUALITY_THRESHOLD: float = 95.0

    # ----------------------------
    # Validation Rules
    # ----------------------------

    ALLOW_DUPLICATE_TIMESTAMPS: bool = False

    ALLOW_MISSING_VALUES: bool = False

    ALLOW_ZERO_VOLUME: bool = True

    MAX_TIME_GAP_MINUTES: int = 15

    PRICE_PRECISION: int = 5

    # ----------------------------
    # Quality Score Penalties
    # ----------------------------

    DUPLICATE_TIMESTAMP_PENALTY: float = 0.20

    MISSING_VALUE_PENALTY: float = 0.20

    INVALID_OHLC_PENALTY: float = 0.50

    TIMESTAMP_ORDER_PENALTY: float = 5.0


# ==========================================================
# Cleaning Configuration
# ==========================================================


@dataclass(frozen=True)
class CleaningConfig:
    """
    Cleaning pipeline configuration.
    """

    REMOVE_DUPLICATES: bool = True

    SORT_BY_TIMESTAMP: bool = True

    RESET_INDEX: bool = True

    DROP_INVALID_ROWS: bool = True


# ==========================================================
# Indicator Configuration
# ==========================================================


@dataclass(frozen=True)
class IndicatorConfig:
    """
    Technical indicator settings.
    """

    EMA_FAST: int = 20

    EMA_SLOW: int = 50

    EMA_LONG: int = 200

    RSI_PERIOD: int = 14

    ATR_PERIOD: int = 14

    MACD_FAST: int = 12

    MACD_SLOW: int = 26

    MACD_SIGNAL: int = 9

    BOLLINGER_PERIOD: int = 20

    BOLLINGER_STD: int = 2


# ==========================================================
# Structure Configuration
# ==========================================================


@dataclass(frozen=True)
class StructureConfig:
    """
    Market structure settings.
    """

    SWING_LOOKBACK: int = 5

    BOS_CONFIRMATION_CANDLES: int = 2

    CHOCH_CONFIRMATION_CANDLES: int = 2


    # ==========================================================
# Regime Detection Configuration
# ==========================================================


@dataclass(frozen=True)
class RegimeConfig:
    """
    Market regime detection settings.

    These settings control how the system classifies
    market conditions into:

    - TRENDING
    - RANGING
    - VOLATILE
    - CHOPPY

    The Regime Detection Engine uses indicators
    (EMA, ATR) and structure information
    (BOS, CHOCH) to determine the current
    market environment.
    """

    # ----------------------------
    # Trend Detection
    # ----------------------------

    TREND_EMA_DISTANCE: float = 0.001

    # ----------------------------
    # Volatility Detection
    # ----------------------------

    VOLATILITY_THRESHOLD: float = 0.02

    # ----------------------------
    # Structure Thresholds
    # ----------------------------

    BOS_THRESHOLD: int = 2

    CHOCH_THRESHOLD: int = 3


# ==========================================================
# Pipeline Configuration
# ==========================================================


@dataclass(frozen=True)
class PipelineConfig:
    """
    Feature Engineering pipeline configuration.
    """

    STOP_ON_VALIDATION_ERROR: bool = True

    ENABLE_DATA_CLEANING: bool = True

    ENABLE_INDICATORS: bool = True

    ENABLE_STRUCTURE_DETECTION: bool = True


# ==========================================================
# Logging Configuration
# ==========================================================


@dataclass(frozen=True)
class LoggingConfig:
    """
    Application logging configuration.
    """

    LOGGER_NAME: str = "research_lab"

    LOG_DIRECTORY: str = "logs"

    LOG_FILE_NAME: str = "research_lab.log"

    LOG_LEVEL: LogLevel = LogLevel.INFO

    MAX_LOG_SIZE_MB: int = 10

    BACKUP_COUNT: int = 5

    LOG_FORMAT: str = (
        "%(asctime)s | "
        "%(levelname)s | "
        "%(name)s | "
        "%(message)s"
    )

# ==========================================================
# Market Analysis Configuration
# ==========================================================


@dataclass(frozen=True)
class MarketAnalysisConfig:
    """
    Market Analysis settings.
    """

    WEEKLY_WEIGHT: float = 0.40

    DAILY_WEIGHT: float = 0.35

    H4_WEIGHT: float = 0.25

    MIN_CONFIDENCE: float = 60.0


# ==========================================================
# Machine Learning Configuration
# ==========================================================


@dataclass(frozen=True)
class MachineLearningConfig:
    """
    Machine Learning settings.
    """

    RANDOM_STATE: int = 42

    TRAIN_TEST_SPLIT: float = 0.2

    CROSS_VALIDATION_FOLDS: int = 5

    ENABLE_MODEL_VERSIONING: bool = True

    ENABLE_FEATURE_SCALING: bool = True 

# ==========================================================
# Strategy Configuration
# ==========================================================


@dataclass(frozen=True)
class StrategyConfig:
    """
    Strategy settings.
    """

    TOP_STRATEGIES: int = 2

    MIN_STRATEGY_SCORE: float = 60.0