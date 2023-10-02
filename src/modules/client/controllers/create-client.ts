import { Request, Response } from 'express'
import { CreateClientUseCase } from '../use-cases/create-client'

class CreateClientController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body

    const createClientUseCase = new CreateClientUseCase()
    const result = await createClientUseCase.execute({
      username,
      password,
    })

    return res.json({
      client: {
        id: result.id,
        username: result.username,
      },
    })
  }
}

export const createClientController = new CreateClientController()
