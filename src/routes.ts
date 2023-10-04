import { Router } from 'express'
import { createClientController } from './modules/client/controllers/create-client'
import { authenticateClientController } from './modules/client/controllers/authenticate'
import { createDeliverymanController } from './modules/deliveryman/controllers/create-deliveryman'
import { authenticateDeliverymanController } from './modules/deliveryman/controllers/authenticate'
import { createDeliveryController } from './modules/deliveries/controllers/create-delivery'
import { ensureAuthenticateClient } from './middlewares/ensure-authenticate-clients'

export const routes = Router()

routes.post('/client/auth', authenticateClientController.handle)
routes.post('/client', createClientController.handle)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle)

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handle,
)
