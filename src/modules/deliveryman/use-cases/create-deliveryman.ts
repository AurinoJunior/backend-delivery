import { hashSync } from 'bcrypt'
import { prisma } from '../../../database/prisma'

interface ICreateDeliverymanUseCase {
  username: string
  password: string
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliverymanUseCase) {
    const deliverymanExists = await prisma.deliveryman.findUnique({
      where: {
        username,
      },
    })

    if (deliverymanExists) throw new Error('Deliveryman already exists')

    const hashPassword = hashSync(password, 6)

    const newDeliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    })

    return newDeliveryman
  }
}
