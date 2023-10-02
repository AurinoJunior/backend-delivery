import { Request, Response } from 'express'
import { CreateDeliverymanUseCase } from '../use-cases/create-deliveryman'

class CreateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body

    const createDeliverymantUseCase = new CreateDeliverymanUseCase()
    const result = await createDeliverymantUseCase.execute({
      username,
      password,
    })

    return res.json({
      deliveryman: {
        id: result.id,
        username: result.username,
      },
    })
  }
}

export const createDeliverymanController = new CreateDeliverymanController()
