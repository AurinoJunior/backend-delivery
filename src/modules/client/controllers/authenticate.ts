import { Request, Response } from 'express'
import { AuthenticateClientUseCase } from '../use-cases/authenticate'

class AuthenticateClientController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body

    const authenticateClientUseCase = await new AuthenticateClientUseCase()
    const result = await authenticateClientUseCase.execute({
      username,
      password,
    })

    return res.json(result)
  }
}

export const authenticateClientController = new AuthenticateClientController()
