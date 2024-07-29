import express from 'express'
import warehouseRouter from '../router/warehousesRouter.js'
import driversRoutes from '../router/driversRouter.js'
import routerVehicles  from '../router/vehiclesRouter.js'
import shipmentsRouter from '../router/shipmentsRouter.js'

export const router = express()

router.use(express.json())

router.use('/warehouses', warehouseRouter)
router.use('/drivers', driversRoutes)
router.use('/vehicles', routerVehicles )
router.use('/shipments', shipmentsRouter) 
