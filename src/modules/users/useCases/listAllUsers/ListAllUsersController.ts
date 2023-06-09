import { Request, Response } from "express"

import { ListAllUsersUseCase } from "./ListAllUsersUseCase"

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers

    const userId: string = Array.isArray(user_id) ? user_id[0] : user_id

    try {
      const users = this.listAllUsersUseCase.execute({ user_id: userId })
      return response.json(users)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { ListAllUsersController }
