import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ id }: IRequest): User {
    const users = this.usersRepository.findById(id);
    if (!users) {
      throw new Error("User not an exists");
    }
    return users;
  }
}

export { ShowUserProfileUseCase };
