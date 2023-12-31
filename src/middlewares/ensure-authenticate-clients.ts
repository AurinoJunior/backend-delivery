import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export async function ensureAuthenticateClient(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token missing',
    })
  }

  const token = authHeader.split(' ')[1]
  try {
    const { sub } = verify(token, process.env.CLIENT_AUTH_SECRET as string)

    req.idClient = String(sub)

    return next()
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid token!',
    })
  }
}
