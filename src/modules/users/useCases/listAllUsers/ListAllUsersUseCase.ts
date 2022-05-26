import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.findById(user_id);

    if (!users) {
      throw new Error("User not found");
    }
    if (!users.admin) {
      throw new Error("User is not an administrator");
    }
    const all = this.usersRepository.list();

    return all;
  }
}

export { ListAllUsersUseCase };
