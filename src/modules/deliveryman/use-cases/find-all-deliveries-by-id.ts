import { prisma } from '../../../database/prisma'

export class FindAllDeliveriesByIdUseCase {
  async execute(idDeliveryman: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: idDeliveryman,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    })

    return deliveries
  }
}
