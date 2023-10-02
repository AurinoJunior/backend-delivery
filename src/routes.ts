import { Router } from 'express'
import { createClientController } from './modules/client/controllers/create-client'
import { authenticateClientController } from './modules/client/controllers/authenticate'
import { createDeliverymanController } from './modules/deliveryman/controllers/create-deliveryman'
import { authenticateDeliverymanController } from './modules/deliveryman/controllers/authenticate'

export const routes = Router()

routes.post('/client/auth', authenticateClientController.handle)
routes.post('/client', createClientController.handle)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle)
