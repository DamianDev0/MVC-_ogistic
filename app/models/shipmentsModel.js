import { pool } from "../../config/db.js";

import { findWarehouseById,findVehicleById,findDriverById } from "../utils/functionsQuerys.js";





export async function getShipments() {
  try {
    const [shipment] = await pool.query("SELECT * FROM shipments");
    return shipment;
  } catch (error) {
    console.error(error);
  }
}

export async function createdshipment(shipment) {
  try {

    const warehouseExists = await findWarehouseById(shipment.warehouse_id)
    const vehicleExists = await findVehicleById(shipment.vehicle_id)
    const driverExists = await findDriverById(shipment.driver_id)

    if (!warehouseExists ||!vehicleExists ||!driverExists) {
      throw new Error("One or more required IDs do not exist in the database.")
    }
    const shipmentCreate = await pool.query(
      "INSERT INTO shipments (item,quantity,warehouse_id,vehicle_id,driver_id) VALUES (?, ?, ?, ?,?)",
      [shipment.item, shipment.quantity, shipment.warehouse_id, shipment.vehicle_id, shipment.driver_id]
    );

    return shipmentCreate;

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
}
