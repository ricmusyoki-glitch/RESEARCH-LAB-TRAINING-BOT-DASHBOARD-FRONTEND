from app.data_pipeline.provider import (
    DataProvider,
)


def test_returns_dataframe():

    provider = DataProvider()

    dataframe = (
        provider.get_market_data(
            "EURUSD",
            "M15",
        )
    )

    assert dataframe is not None