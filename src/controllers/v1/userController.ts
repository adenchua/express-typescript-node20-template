/** <-- DELETE THIS FILE --> */
import { NextFunction, Request, Response } from "express";

import userService from "../../services/userService";

const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await userService.fetchUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await userService.fetchUserById(id);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

export default { getUsers, getUserById };
