"""
Application Logger

Centralized logging for the Research Lab.

Every module in the application should obtain its
logger from this file.

Author: Rick Research Lab
"""

import logging
from logging.handlers import RotatingFileHandler
from pathlib import Path

from app.core.config import LoggingConfig


def get_logger(name: str | None = None) -> logging.Logger:
    """
    Create and return a configured logger.

    Parameters
    ----------
    name
        Optional logger name.

    Returns
    -------
    logging.Logger
    """

    logger_name = name or LoggingConfig.LOGGER_NAME

    logger = logging.getLogger(logger_name)

    if logger.handlers:
        return logger

    logger.setLevel(LoggingConfig.LOG_LEVEL.value)

    log_directory = Path(LoggingConfig.LOG_DIRECTORY)

    log_directory.mkdir(parents=True, exist_ok=True)

    log_file = (
        log_directory /
        LoggingConfig.LOG_FILE_NAME
    )

    formatter = logging.Formatter(
        LoggingConfig.LOG_FORMAT
    )

    file_handler = RotatingFileHandler(
        filename=log_file,
        maxBytes=LoggingConfig.MAX_LOG_SIZE_MB * 1024 * 1024,
        backupCount=LoggingConfig.BACKUP_COUNT,
        encoding="utf-8",
    )

    file_handler.setFormatter(formatter)

    console_handler = logging.StreamHandler()

    console_handler.setFormatter(formatter)

    logger.addHandler(file_handler)
    logger.addHandler(console_handler)

    logger.propagate = False

    return logger


logger = get_logger()