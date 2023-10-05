import { prisma } from '../../../database/prisma'

interface IUpdateDeliveryman {
  idDelivery: string
  idDeliveryman: string
}

export class UpdateDeliverymanUseCase {
  async execute({ idDelivery, idDeliveryman }: IUpdateDeliveryman) {
    const delivery = await prisma.deliveries.update({
      where: {
        id: idDelivery,
      },
      data: {
        id_deliveryman: idDeliveryman,
      },
    })

    return delivery
  }
}
