import { pool } from "../../config/db.js";

export const findVehicleById = async (id) => {
    try {
      const [vehicle] = await pool.query(
        "SELECT * FROM vehicles WHERE id = ?",
        [id]
      );
      return vehicle.length > 0; 
    } catch (error) {
      console.error(error);
      throw new Error('Error while checking vehicle existence');
    }
  };


export const findDriverById = async (id) => {
    try {
      const [driver] = await pool.query(
        "SELECT * FROM drivers WHERE id =?",
        [id]
      );
      return driver.length > 0; 

    } catch (error) {
      console.error(error);
      throw new Error('Error while checking driver existence');
    }
  };


export const findWarehouseById = async (id) => {
    try {

        const [warehouse] = await pool.query(
            'SELECT * FROM warehouses WHERE id = ?', [id]
        )

        if(!warehouse){
            throw new Error('Warehouse not found');
        }
        console.log('id encontrado', warehouse)

        return warehouse.length > 0;
        
    } catch (error) {
        console.error(error);
        throw new Error('Error while checking warehouse existence');
        
    }
}

export const findShipmentById = async (id) => {
    try {

        const [shipment] = await pool.query(
            'SELECT * FROM shipments WHERE id =?', [id]
        )
        return shipment.length > 0;
        
    } catch (error) {
        console.error(error);
        throw new Error('Error while checking driver existence');
        
    }
}