import Unauthorized from "@error/Unauthorized";
import { IUserRepository } from "@repository/IUserRepository";
import { IToken } from "../helpers/IToken";
import { SignUpData } from "../types/dtos/userDto";
import { User } from "@entity/User";

export class ISignUp {
  constructor(
    private userRepository: IUserRepository,
    private token: IToken,
  ) {}
  
  async execute(userData: SignUpData) {
    const user = new User(userData);
    const { id } = await this.userRepository.save(user);
    if (!user) {
      throw new Unauthorized("Email or Password is incorrect");
    }
    return this.token.generate({ sub: id });
  }
}