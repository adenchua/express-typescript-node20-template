/** <-- DELETE THIS FILE --> */
import { Request, Response } from "express";

import userService from "../../services/userService";

const getUsers = (req: Request, res: Response): void => {
  const users = userService.fetchUsers();
  res.send(users);
};

const getUserById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const user = userService.fetchUserById(id);

  res.send(user);
};

export default { getUsers, getUserById };
