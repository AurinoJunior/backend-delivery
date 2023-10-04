import { Request, Response } from 'express'
import { FindAllAvailableUseCase } from '../use-cases/find-all-available'

class FindAllAvailableController {
  async handle(_: Request, res: Response) {
    const findAllAvailableUseCase = new FindAllAvailableUseCase()
    const result = await findAllAvailableUseCase.execute()

    return res.json(result)
  }
}

export const findAllAvailableController = new FindAllAvailableController()
