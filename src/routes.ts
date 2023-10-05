import { Router } from 'express'
import { createClientController } from './modules/client/controllers/create-client'
import { authenticateClientController } from './modules/client/controllers/authenticate'
import { createDeliverymanController } from './modules/deliveryman/controllers/create-deliveryman'
import { authenticateDeliverymanController } from './modules/deliveryman/controllers/authenticate'
import { createDeliveryController } from './modules/deliveries/controllers/create-delivery'
import { findAllAvailableController } from './modules/deliveries/controllers/find-all-available'
import { ensureAuthenticateClient } from './middlewares/ensure-authenticate-clients'
import { ensureAuthenticateDeliveryman } from './middlewares/ensure-authenticate-deliveryman'
import { updateDeliverymanController } from './modules/deliveries/controllers/update-deliveryman'
import { findAllDeliveriesController } from './modules/client/controllers/find-all-deliveries'

export const routes = Router()

routes.post('/client/auth', authenticateClientController.handle)
routes.post('/client', createClientController.handle)
routes.get(
  '/client/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesController.handle,
)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle)

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handle,
)
routes.get(
  '/delivery/available',
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle,
)
routes.put(
  '/delivery/update/:idDelivery',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle,
)
