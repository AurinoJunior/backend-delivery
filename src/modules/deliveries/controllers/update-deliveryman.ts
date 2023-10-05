import { Request, Response } from 'express'
import { UpdateDeliverymanUseCase } from '../use-cases/update-deliveryman'

class UpdateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { idDelivery } = req.params

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase()
    const result = await updateDeliverymanUseCase.execute({
      idDeliveryman: req.idDeliveryman,
      idDelivery,
    })

    return res.json(result)
  }
}

export const updateDeliverymanController = new UpdateDeliverymanController()
