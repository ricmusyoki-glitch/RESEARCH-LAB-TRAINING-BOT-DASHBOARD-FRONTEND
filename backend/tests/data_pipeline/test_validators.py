import pandas as pd

from app.data_pipeline.validators import (
    DataValidator,
)


def test_empty_dataframe_invalid():

    validator = DataValidator()

    dataframe = pd.DataFrame()

    assert (
        validator.validate(
            dataframe
        )
        is False
    )


def test_valid_dataframe():

    validator = DataValidator()

    dataframe = pd.DataFrame(
        {
            "time": [1],
            "open": [1],
            "high": [1],
            "low": [1],
            "close": [1],
            "volume": [1],
        }
    )

    assert (
        validator.validate(
            dataframe
        )
        is True
    )