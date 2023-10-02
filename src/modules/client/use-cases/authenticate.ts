import { compare } from 'bcrypt'
import { prisma } from '../../../database/prisma'
import { sign } from 'jsonwebtoken'

interface IAuthenticateUseCase {
  username: string
  password: string
}

export class AuthenticateUseCase {
  async execute({ username, password }: IAuthenticateUseCase) {
    const client = await prisma.client.findFirst({
      where: {
        username,
      },
    })

    if (!client) throw new Error('Username or password invalid!')

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) throw new Error('Username or password invalid!')

    const token = sign(
      {
        username,
      },
      '58344f3102f4aef1045e627bf5040d15',
      {
        subject: client.id,
        expiresIn: '1d',
      },
    )

    return { token }
  }
}
