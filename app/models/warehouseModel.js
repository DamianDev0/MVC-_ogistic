import { pool } from "../../config/db.js";
import { findVehicleById } from "../utils/functionsQuerys.js";

//funcion para encontrar por

export async function getWarehouses() {
  try {
    const [warehouses] = await pool.query("SELECT * FROM warehouses ");
    return warehouses;
  } catch (error) {
    console.error(error);
    throw new Error ('Cannot find warehuses', error)
  }
}

export async function getWarehouseById(id) {
  try {
    const [warehouse] = await pool.query(
      "SELECT * FROM warehouses WHERE id =?",
      [id]
    );

    return warehouse;
  } catch (error) {
    console.error(error);
    throw new Error("Error while checking warehouse existence.");
  }
}

export async function createWarehouse(warehouse) {
  try {
    const vehicleExists = await findVehicleById(warehouse.vehicle_id);

    if (!vehicleExists) {
      throw new Error("Vehicle not found");
    }

    const [result] = await pool.query(
      "INSERT INTO warehouses (name, location, vehicle_id) VALUES (?, ?, ?)",
      [warehouse.name, warehouse.location, warehouse.vehicle_id]
    );

   
    const newWarehouseId = result.insertId;

    
    const [newWarehouse] = await pool.query(
      "SELECT * FROM warehouses WHERE id = ?",
      [newWarehouseId]
    );

    return newWarehouse[0];
  } catch (error) {
    console.error('Error creating warehouse:', error);
    throw error; 
  }
}

export async function deleteWarehouse(id) {
  try {

    const [result] = await pool.query("DELETE FROM warehouses WHERE id = ?", [id]);

    if(!result){
      throw new Error('Warehouse not found');
    }
    return result;
  } catch (error) {
    console.error('Database error:', error);
    throw error; 
  }
}
