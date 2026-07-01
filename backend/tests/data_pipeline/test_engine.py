from app.data_pipeline.engine import (
    DataPipelineEngine,
)

from app.core.models import (
    DataPipelineResult,
)


def test_returns_result():

    engine = DataPipelineEngine()

    result = engine.load_data(
        symbol="EURUSD",
        timeframe="M15",
    )

    assert isinstance(
        result,
        DataPipelineResult,
    )


def test_returns_failure_for_empty_data():

    engine = DataPipelineEngine()

    result = engine.load_data(
        symbol="EURUSD",
        timeframe="M15",
    )

    assert result.success is False