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

    const [result] = await pool.query(
      "INSERT INTO vehicles (model,year,driver_id) VALUES (?, ?, ?)",
      [vehicle.model, vehicle.year, vehicle.driver_id]
    );

    const newVehicleId = result.insertId

    const [newVehicle] = await pool.query('SELECT * FROM vehicles WHERE id = ?', [newVehicleId])

    return newVehicle[0]

  } catch (error) {
    console.error(error);
    
  }
}


export async function deleteVehicle(id){
  try {
    const [result] = await pool.query('DELETE FROM vehicles WHERE id = ?', [id])

    if(!result){
      throw new Error("Vehicle not found")
    }

    return result[0]
    
  } catch (error) {
    console.error(error)

  }
}