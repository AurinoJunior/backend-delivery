import { Request, Response } from 'express'
import { FindAllDeliveriesByIdUseCase } from '../use-cases/find-all-deliveries-by-id'

class FindAllDeliveriesByIdController {
  async handle(req: Request, res: Response) {
    const findAllDeliveriesByIdUseCase = new FindAllDeliveriesByIdUseCase()
    const deliveries = await findAllDeliveriesByIdUseCase.execute(
      req.idDeliveryman,
    )

    res.json(deliveries)
  }
}

export const findAllDeliveriesByIdController =
  new FindAllDeliveriesByIdController()
