/** <-- DELETE THIS FILE --> */
import { Request, Response, NextFunction } from "express";

// logs the current datetime of request to the console
const timelog = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Time: ", Date.now());
  next();
};

export default { timelog };
