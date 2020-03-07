const LOG_PREFIX = {
    INFO: '[INFO] -',
    WARN: '[WARN] -',
    ERROR: '[ERROR] -',
    FATAL: '[FATAL] -',
};

export class Logger {
    public static info(message: string): void {
        console.info(LOG_PREFIX.INFO, message);
    }

    public static warn(message: string): void {
        console.warn(LOG_PREFIX.WARN, message);
    }

    public static error(message: string): void {
        console.error(LOG_PREFIX.ERROR, message);
    }

    public static fatal(message: string): void {
        console.error(LOG_PREFIX.FATAL, message);
    }
}
