import { User } from "../../model/User"
import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
  user_id: string
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id)

    if (user) {
      this.usersRepository.turnAdmin(user)
    } else {
      throw new Error("User does not exist")
    }

    return user
  }
}

export { TurnUserAdminUseCase }
