import { Router } from "express";
import { getAllShipments,createdShipmentRequest} from "../controllers/shipmentsController.js";

const shipmentsRouter = Router()
 
// Ruta para obtener todos los shipments

shipmentsRouter.get('/', getAllShipments)
shipmentsRouter.post('/',createdShipmentRequest )


export default shipmentsRouter;