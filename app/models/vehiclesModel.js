import { pool } from "../../config/db.js";
import { findDriverById } from "../utils/functionsQuerys.js";

export async function getVehicles() {
  try {
    const [vehicles] = await pool.query("SELECT * FROM vehicles");

    return vehicles;
  } catch (error) {
    console.error(error);
  }
}


export async function createdVehicle(vehicle){
  try {

    const driverExists = await findDriverById(vehicle.driver_id)

    if(!driverExists){
      throw new Error("Driver not found")
    }

    const vehicleCreated = await pool.query(
      "INSERT INTO vehicles (model,year,driver_id) VALUES (?, ?, ?)",
      [vehicle.model, vehicle.year, vehicle.driver_id]
    );

    return vehicleCreated;


  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
}