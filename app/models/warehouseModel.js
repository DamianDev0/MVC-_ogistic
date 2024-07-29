import { pool } from "../../config/db.js";
import { findVehicleById } from "../utils/functionsQuerys.js";


//funcion para encontrar por


export async function getWarehouses() {
  try {
    const [warehouses] = await pool.query("SELECT * FROM warehouses ");
    return warehouses;
  } catch (error) {
    console.error(error);
  }
}

export const createWarehouse = async (warehouse) => {
  try {
    const vehicleExists = await findVehicleById(warehouse.vehicle_id);

    if (!vehicleExists) {
     console.error('Vehicle not found')
    }

    const warehouseCreated = await pool.query(
      "INSERT INTO warehouses (name, location, vehicle_id) VALUES (?, ?, ?)",
      [warehouse.name, warehouse.location, warehouse.vehicle_id]
    );

   
    return warehouseCreated
    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};
