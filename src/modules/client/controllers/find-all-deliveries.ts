import { Request, Response } from 'express'
import { FindAllDeliveriesUseCase } from '../use-cases/find-all-deliveries'

class FindAllDeliveriesController {
  async handle(req: Request, res: Response) {
    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()
    const deliveries = await findAllDeliveriesUseCase.execute(req.idClient)

    res.json(deliveries)
  }
}

export const findAllDeliveriesController = new FindAllDeliveriesController()
