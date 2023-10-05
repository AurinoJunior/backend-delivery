import { prisma } from '../../../database/prisma'

export class FindAllDeliveries {
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
