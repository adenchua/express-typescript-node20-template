/** <-- DELETE THIS FILE --> */
import { User } from "../interfaces/User";
import { UserModel } from "../models/UserModel";
import { sleep } from "../utils/sleep";

/**
 * Interacts with the data layer to return all users
 * @returns a list of users
 */
const fetchUsers = async (): Promise<User[]> => {
  await sleep(5000);
  return UserModel.readMany();
};

/**
 * Interacts with the data layer to return a user based on user ID
 * @returns a user
 */
const fetchUserById = async (id: string): Promise<User> => {
  await sleep(5000);
  return UserModel.read(id);
};

export default { fetchUsers, fetchUserById };
