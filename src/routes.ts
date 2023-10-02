import { Router } from 'express'
import { createClientController } from './modules/client/controllers/create-client'
import { authenticateController } from './modules/client/controllers/authenticate'

export const routes = Router()

routes.post('/auth', authenticateController.handle)
routes.post('/client', createClientController.handle)
