const LOG_PREFIX = {
    INFO: '[INFO] -',
    WARN: '[WARN] -',
    ERROR: '[ERROR] -',
    FATAL: '[FATAL] -',
};

export class Logger {
    public static info(message: string, ...optionalParams: any[]): void {
        console.info(LOG_PREFIX.INFO, message, optionalParams);
    }

    public static warn(message: string, ...optionalParams: any[]): void {
        console.warn(LOG_PREFIX.WARN, message, optionalParams);
    }

    public static error(message: string, ...optionalParams: any[]): void {
        console.error(LOG_PREFIX.ERROR, message, optionalParams);
    }

    public static fatal(message: string, ...optionalParams: any[]): void {
        console.error(LOG_PREFIX.FATAL, message, optionalParams);
    }
}
