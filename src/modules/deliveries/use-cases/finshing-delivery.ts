import { prisma } from '../../../database/prisma'

interface IFinishingDelivery {
  idDelivery: string
  idDeliveryman: string
}

export class FinishingDeliveryUseCase {
  async execute({ idDelivery, idDeliveryman }: IFinishingDelivery) {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id: idDelivery,
        id_deliveryman: idDeliveryman,
      },
      data: {
        end_at: new Date(),
      },
    })

    return delivery
  }
}
