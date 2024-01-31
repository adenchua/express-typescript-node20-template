/** <-- DELETE THIS FILE --> */
import { User } from "../interfaces/User";

/**
 * Interacts with the "database" directly for User index/table operations
 */
export class UserModel {
  static read(id: string): User {
    return {
      username: id,
      name: "unknown",
    };
  }

  static readMany(): User[] {
    return [
      {
        username: "sam",
        name: "same",
      },
      { username: "john", name: "john" },
    ];
  }
}

export default {};
