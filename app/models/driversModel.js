import { pool } from "../../config/db.js";
import { findWarehouseById } from "../utils/functionsQuerys.js";

export async function getDrivers() {
  try {
    const [drivers] = await pool.query("SELECT * FROM drivers");
    return drivers;
  } catch (error) {
    console.log(error);
  }
}

export async function createDriver(driver) {
  try {

    const warehouseExists = await findWarehouseById(driver.warehouse_id)

    if(!warehouseExists){
      throw new Error('Warehouse does not exist')
    }

    const [result] = await pool.query(
      "INSERT INTO drivers (name,warehouse_id) VALUES (?,?)",
      [driver.name, driver.warehouse_id]
    );

    const newDriverId = result.insertId

    const [newDriver] = await pool.query('SELECT * FROM drivers WHERE id = ?', [newDriverId])

    return newDriver[0]
    
  } catch (error) {
    console.error(error);
    throw new Error('Error creation of driver')
  }
}


export async function findDriver(id){
  try {
    const [driver] = await pool.query("SELECT * FROM drivers WHERE id = ?", [id]);
    return driver;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteDriver(id){
  try {

    const [result] = await pool.query('DELETE FROM drivers WHERE id = ?', [id])

    if(!result){
      throw new Error("Driver does not exist.")
    }
    return result
    
  } catch (error) {
    console.error(error);
    throw new Error("Error while deleting driver.");
  }

}