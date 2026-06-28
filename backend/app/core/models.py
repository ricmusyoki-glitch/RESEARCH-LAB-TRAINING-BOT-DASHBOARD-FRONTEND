"""
Core Response Models

Shared response models for every intelligence engine
in the Rick Research Lab.

These models define the communication contract
between engines.

Author: Rick Research Lab
"""

from datetime import datetime
from typing import Any

import pandas as pd
from pydantic import BaseModel, ConfigDict, Field


class EngineResponse(BaseModel):
    """
    Base response for every intelligence engine.
    """

    model_config = ConfigDict(
        arbitrary_types_allowed=True
    )

    success: bool = Field(
        description="Whether execution succeeded."
    )

    timestamp: datetime = Field(
        default_factory=datetime.utcnow
    )

    warnings: list[str] = Field(
        default_factory=list
    )

    metadata: dict[str, Any] = Field(
        default_factory=dict
    )


class DataQualityReport(BaseModel):
    """
    Report describing the quality of market data.
    """

    total_rows: int

    missing_values: int

    duplicate_rows: int

    invalid_ohlc_rows: int

    timestamp_errors: int

    quality_score: float = Field(
        ge=0,
        le=100,
    )


class ValidationResult(EngineResponse):
    """
    Validation engine result.
    """

    errors: list[str] = Field(
        default_factory=list
    )

    report: DataQualityReport


class CleaningResult(EngineResponse):
    """
    Cleaning engine result.
    """

    original_rows: int

    cleaned_rows: int

    removed_rows: int

    dataframe: pd.DataFrame


class IndicatorResult(EngineResponse):
    """
    Indicator calculation result.
    """

    dataframe: pd.DataFrame

    indicators: list[str] = Field(
        default_factory=list
    )


class StructureResult(EngineResponse):
    """
    Market structure detection result.
    """

    dataframe: pd.DataFrame

    structures: list[str] = Field(
        default_factory=list
    )


class PipelineResult(EngineResponse):
    """
    Final output of the Feature Engineering pipeline.
    """

    dataframe: pd.DataFrame

    completed_steps: list[str] = Field(
        default_factory=list
    )


# ==========================================================
# Market Analysis Models
# ==========================================================


class TimeframeAnalysis(BaseModel):
    """
    Analysis result for a single timeframe.
    """

    timeframe: str

    bias: str

    regime: str

    confidence: float = Field(
        ge=0,
        le=100,
    )


class DXYAnalysisResult(EngineResponse):
    """
    Complete DXY analysis result.
    """

    weekly: TimeframeAnalysis

    daily: TimeframeAnalysis

    h4: TimeframeAnalysis

    h1: TimeframeAnalysis

    dollar_strength: float = Field(
        ge=0,
        le=100,
    )


class PairAnalysisResult(EngineResponse):
    """
    Complete pair analysis result.
    """

    pair: str

    daily: TimeframeAnalysis

    h4: TimeframeAnalysis

    h1: TimeframeAnalysis

    m15: TimeframeAnalysis

    overall_bias: str

    confidence: float = Field(
        ge=0,
        le=100,
    )


class ConfidenceResult(EngineResponse):
    """
    Confidence engine output.
    """

    confidence: float = Field(
        ge=0,
        le=100,
    )

    reasons: list[str] = Field(
        default_factory=list
    )


# ==========================================================
# Market Analysis Pipeline Models
# ==========================================================


class MarketAnalysisResult(EngineResponse):
    """
    Final Market Analysis output.
    """

    dxy_analysis: DXYAnalysisResult

    pair_analysis: PairAnalysisResult

    confidence_analysis: ConfidenceResult

    trade_ready: bool


# ==========================================================
# Strategy Models
# ==========================================================


class StrategyScore(BaseModel):
    """
    Strategy evaluation score.
    """

    strategy_name: str

    score: float = Field(
        ge=0,
        le=100,
    )

    reasons: list[str] = Field(
        default_factory=list
    )


class StrategyRankingResult(
    EngineResponse
):
    """
    Ranked strategies.
    """

    rankings: list[StrategyScore] = Field(
        default_factory=list
    )

    top_strategies: list[
        StrategyScore
    ] = Field(
        default_factory=list
    )

class SignalResult(EngineResponse):
    """
    Trading signal result.
    """

    signal: str

    confidence: float = Field(
        ge=0,
        le=100,
    )

    reasons: list[str] = Field(
        default_factory=list
    )

class ExecutionResult(EngineResponse):
    """
    Execution validation result.
    """

    signal: str

    entry_valid: bool

    status: str

    reasons: list[str] = Field(
        default_factory=list
    )

class PaperTradeResult(EngineResponse):
    """
    Paper trade creation result.
    """

    pair: str

    direction: str

    confidence: float = Field(
        ge=0,
        le=100,
    )

    status: str