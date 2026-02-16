import { User } from "../../domain/models/User.ts";

export class UserRepository {

  createUser(name: string, lastName: string, age: number): User {
    return new User(name, lastName, age);
  }

}