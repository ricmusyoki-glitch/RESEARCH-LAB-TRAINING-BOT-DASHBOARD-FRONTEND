import pandas as pd

from app.data_pipeline.transformers import (
    DataTransformer,
)


def test_returns_dataframe():

    transformer = (
        DataTransformer()
    )

    dataframe = pd.DataFrame(
        {
            "close": [1, 2, 3]
        }
    )

    result = transformer.transform(
        dataframe
    )

    assert len(result) == 3