import ApiError from "./ApiError";

const asyncHandler = (fn) => {
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({
        message: error.message,
        succuss: false,
      });
    }
  };
};

export default asyncHandler;
