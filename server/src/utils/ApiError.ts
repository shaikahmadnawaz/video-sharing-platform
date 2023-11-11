class ApiError<T> extends Error {
  statusCode: number;
  data: null | T;
  message: string;
  success: boolean;
  errors: T[];

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: T[] = [],
    stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.stack = stack;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };