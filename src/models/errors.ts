export type ErrorCode =
  | "NO_SUCH_USER"
  | "INVALID_PASSWORD"
  | "INTERNAL_SERVER_ERROR"
  | "UNKNOWN";

export class AppError extends Error {
  constructor(
    public code: ErrorCode,
    public message: string,
    public cause?: Error
  ) {
    super();
    this.code = code;
    this.message = message;
    this.cause = cause;
  }
}
