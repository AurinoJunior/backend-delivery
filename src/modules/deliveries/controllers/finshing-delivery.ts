import { Request, Response } from 'express'
import { FinishingDeliveryUseCase } from '../use-cases/finshing-delivery'

class FinishingDeliveryController {
  async handle(req: Request, res: Response) {
    const { idDelivery } = req.params

    const finishingDeliveryUseCase = new FinishingDeliveryUseCase()
    const result = await finishingDeliveryUseCase.execute({
      idDeliveryman: req.idDeliveryman,
      idDelivery,
    })

    return res.json(result)
  }
}

export const finishingDeliveryController = new FinishingDeliveryController()
