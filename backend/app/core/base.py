"""
Base Engine

Shared base class for every intelligence engine
in the Research Lab.

Every engine should inherit from this class to gain
consistent logging, metadata and execution timing.

Author: Rick Research Lab
"""

from __future__ import annotations

from datetime import datetime
from time import perf_counter
from typing import Any

from app.core.logger import get_logger


class BaseEngine:
    """
    Base class for every intelligence engine.

    Responsibilities
    ----------------
    - Logging
    - Execution timing
    - Engine metadata
    """

    def __init__(self) -> None:
        self.logger = get_logger(self.__class__.__module__)

        self.engine_name = self.__class__.__name__

        self.started_at: datetime | None = None

        self.finished_at: datetime | None = None

        self.execution_time: float | None = None

    def start(self) -> None:
        """
        Start execution timer.
        """

        self.started_at = datetime.utcnow()

        self._start_timer = perf_counter()

        self.logger.info(
            "%s started.",
            self.engine_name,
        )

    def finish(self) -> None:
        """
        Stop execution timer.
        """

        self.finished_at = datetime.utcnow()

        self.execution_time = (
            perf_counter() - self._start_timer
        )

        self.logger.info(
            "%s completed in %.4f seconds.",
            self.engine_name,
            self.execution_time,
        )

    def log_info(self, message: str, *args: Any) -> None:
        """
        Log an informational message.
        """

        self.logger.info(message, *args)

    def log_warning(self, message: str, *args: Any) -> None:
        """
        Log a warning.
        """

        self.logger.warning(message, *args)

    def log_error(self, message: str, *args: Any) -> None:
        """
        Log an error.
        """

        self.logger.error(message, *args)

    @property
    def metadata(self) -> dict[str, Any]:
        """
        Engine execution metadata.
        """

        return {
            "engine": self.engine_name,
            "started_at": self.started_at,
            "finished_at": self.finished_at,
            "execution_time": self.execution_time,
        }