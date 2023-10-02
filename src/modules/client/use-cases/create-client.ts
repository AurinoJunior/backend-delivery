import { prisma } from '../../../database/prisma'
import { hashSync } from 'bcrypt'

interface ICreateClientUseCase {
  username: string
  password: string
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClientUseCase) {
    const clientExists = await prisma.client.findUnique({
      where: {
        username,
      },
    })

    if (clientExists) throw new Error('Client already exists')

    const hashPassword = hashSync(password, 6)

    const newClient = await prisma.client.create({
      data: {
        username,
        password: hashPassword,
      },
    })

    return newClient
  }
}
