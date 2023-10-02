import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.use((error: Error, _: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      status: 'client error',
      message: error.message,
    })
  }

  return res.status(500).json({
    status: 'server error',
    message: 'Internal server error',
  })
})

app.listen(3333, () => console.log('Server is running 🔥'))
