import { Router } from "express";

import { getAllVehicles,createdVehicleRequest } from "../controllers/vehiclesController.js";

const vehiclesRouter = Router();

vehiclesRouter.get("/", getAllVehicles);
vehiclesRouter.post("/", createdVehicleRequest);


export default vehiclesRouter;