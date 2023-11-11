import { Request, Response, NextFunction } from "express";

const asyncHandler = <T>(
  requestHandler: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<T>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };
  
// another way to write this

// type AsyncFunction = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => Promise<any>;

// const asyncHandler = (fn: AsyncFunction) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await fn(req, res, next);
//     } catch (error) {
//       res.status(error.code || 500).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };
// };