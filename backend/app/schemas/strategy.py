from pydantic import BaseModel


class StrategyCreate(BaseModel):
    name: str
    category: str
    timeframe: str


class StrategyResponse(BaseModel):
    id: int
    name: str
    category: str
    timeframe: str
    win_rate: float
    active: bool

    class Config:
        from_attributes = True


class StrategyUpdate(BaseModel):
    name: str
    category: str
    timeframe: str
