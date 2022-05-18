import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(id: IRequest): User[] {
    const users = this.usersRepository.list();
    console.log(id);
    const user = users.find((usuario) => usuario.id === id);

    if (user.admin === true) {
      return users;
    }
    throw new Error("Permission denied");
  }
}

export { ListAllUsersUseCase };
