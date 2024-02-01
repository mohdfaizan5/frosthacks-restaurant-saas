class ApiError extends Error {
  constructor(statusCode, errors, message = "something went wrong") {
    super(message);
    (this.statusCode = statusCode),
      (this.errors = errors),
      (this.message = message);
  }
}

export default ApiError;
