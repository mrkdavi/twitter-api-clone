import { IUserRepository } from "@repository/IUserRepository";
import Unauthorized from "@error/Unauthorized";
import { IToken } from "../helpers/IToken";

export class ISignIn {
  constructor(
    private userRepository: IUserRepository,
    private token: IToken,
  ) {}
  
  async execute(email: string, password: string) {
    const user = await this.userRepository.getByCredentials(email, password);
    if (!user) {
      throw new Unauthorized("Email or Password is incorrect");
    }
    return this.token.generate({ sub: user.id });
  }
}