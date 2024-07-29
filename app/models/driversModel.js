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

    const createdDriver = await pool.query(
      "INSERT INTO drivers (name,warehouse_id) VALUES (?,?)",
      [driver.name, driver.warehouse_id]
    );

    return createdDriver;
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
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