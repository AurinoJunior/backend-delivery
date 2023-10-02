import { Request, Response } from 'express'
import { AuthenticateDeliverymanUseCase } from '../use-cases/authenticate'

class AuthenticateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body

    const authenticateDeliverymanUseCase =
      await new AuthenticateDeliverymanUseCase()

    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    })

    return res.json(result)
  }
}

export const authenticateDeliverymanController =
  new AuthenticateDeliverymanController()
