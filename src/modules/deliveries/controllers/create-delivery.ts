import { Request, Response } from 'express'
import { CreateDeliveryUseCase } from '../use-cases/create-delivery'

class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { itemName } = req.body

    const createDeliverytUseCase = new CreateDeliveryUseCase()
    const result = await createDeliverytUseCase.execute({
      idClient: req.idClient,
      itemName,
    })

    return res.json(result)
  }
}

export const createDeliveryController = new CreateDeliveryController()
