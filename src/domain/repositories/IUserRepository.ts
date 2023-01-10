import { User } from "@entity/User";

export interface IUserRepository {
  getAll(): Promise<User[]>;
  getByCredentials(email: string, password: string): Promise<User | null>;
  getById(id: number): Promise<User | null>;
  save(user: User): Promise<User>;
}