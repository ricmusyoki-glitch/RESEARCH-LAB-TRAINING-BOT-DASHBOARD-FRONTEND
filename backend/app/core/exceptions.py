"""
Core Exceptions

Application-wide exception hierarchy for the
Research Lab.

Every intelligence engine should inherit from these
exceptions instead of creating unrelated exceptions.

Author: Rick Research Lab
"""


class ResearchLabError(Exception):
    """
    Base exception for the entire Research Lab.
    """

    def __init__(self, message: str):
        super().__init__(message)
        self.message = message


# ==========================================================
# Validation Exceptions
# ==========================================================

class ValidationError(ResearchLabError):
    """Base validation exception."""


class MissingColumnError(ValidationError):
    """Required market data column is missing."""


class MissingValueError(ValidationError):
    """Dataset contains missing values."""


class DuplicateTimestampError(ValidationError):
    """Duplicate timestamps detected."""


class InvalidTimestampError(ValidationError):
    """Timestamp ordering is invalid."""


class InvalidOHLCError(ValidationError):
    """OHLC values are invalid."""


class InvalidSymbolError(ValidationError):
    """Unsupported trading symbol."""


class InvalidTimeframeError(ValidationError):
    """Unsupported timeframe."""


class DataQualityError(ValidationError):
    """Data quality is below the configured threshold."""


# ==========================================================
# Cleaning Exceptions
# ==========================================================

class CleaningError(ResearchLabError):
    """Cleaning pipeline failed."""


# ==========================================================
# Indicator Exceptions
# ==========================================================

class IndicatorError(ResearchLabError):
    """Indicator calculation failed."""


# ==========================================================
# Market Structure Exceptions
# ==========================================================

class MarketStructureError(ResearchLabError):
    """Market structure detection failed."""


# ==========================================================
# Market Analysis Exceptions
# ==========================================================

class MarketAnalysisError(ResearchLabError):
    """Market analysis failed."""


# ==========================================================
# Strategy Exceptions
# ==========================================================

class StrategyError(ResearchLabError):
    """Strategy evaluation failed."""


# ==========================================================
# Ranking Exceptions
# ==========================================================

class RankingError(ResearchLabError):
    """Strategy ranking failed."""


# ==========================================================
# Risk Exceptions
# ==========================================================

class RiskEngineError(ResearchLabError):
    """Risk engine failed."""


# ==========================================================
# Decision Exceptions
# ==========================================================

class DecisionEngineError(ResearchLabError):
    """Decision engine failed."""


# ==========================================================
# Signal Exceptions
# ==========================================================

class SignalGenerationError(ResearchLabError):
    """Signal generation failed."""


# ==========================================================
# Paper Trading Exceptions
# ==========================================================

class PaperTradingError(ResearchLabError):
    """Paper trading failed."""


# ==========================================================
# Learning Exceptions
# ==========================================================

class LearningEngineError(ResearchLabError):
    """Learning engine failed."""


# ==========================================================
# Machine Learning Exceptions
# ==========================================================

class MachineLearningError(ResearchLabError):
    """Machine learning failed."""


class ModelTrainingError(MachineLearningError):
    """Model training failed."""


class PredictionError(MachineLearningError):
    """Prediction failed."""


# ==========================================================
# Pipeline Exceptions
# ==========================================================

class PipelineError(ResearchLabError):
    """Pipeline execution failed."""