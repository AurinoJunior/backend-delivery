import { compare } from 'bcrypt'
import { prisma } from '../../../database/prisma'
import { sign } from 'jsonwebtoken'

interface IAuthenticateDeliverymanUseCase {
  username: string
  password: string
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliverymanUseCase) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    })

    if (!deliveryman) throw new Error('Username or password invalid!')

    const passwordMatch = await compare(password, deliveryman.password)

    if (!passwordMatch) throw new Error('Username or password invalid!')

    const token = sign(
      {
        username,
      },
      process.env.DELIVERYMAN_AUTH_SECRET as string,
      {
        subject: deliveryman.id,
        expiresIn: '1d',
      },
    )

    return { token }
  }
}
