import { Request, Response } from 'express'
import { AuthenticateUseCase } from '../use-cases/authenticate'

class AuthenticateController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body

    const authenticateUseCase = await new AuthenticateUseCase()
    const result = await authenticateUseCase.execute({
      username,
      password,
    })

    return res.json(result)
  }
}

export const authenticateController = new AuthenticateController()
