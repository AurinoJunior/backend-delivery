import { prisma } from '../../../database/prisma'

export class FindAllDeliveriesUseCase {
  async execute(idClient: string) {
    const deliveries = await prisma.client.findMany({
      where: {
        id: idClient,
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
