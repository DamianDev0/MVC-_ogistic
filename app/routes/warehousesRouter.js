import { Router } from "express";
import { pool } from "../../config/db.js";

export const warehouseRouter = Router();

//funcion para obtener a todos los warehouse



// funcion para obtener un warehouse por id

const getWarehouseByiD = async (req, res) => {
  try {
    const id = req.params.id;

    const [warehouse] = await pool.query(
      "SELECT * FROM warehouses WHERE id = ?",
      [id]
    );

    res
      .status(200)
      .json({ message: "warehouse succesfully fetched", data: warehouse[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

// funcion para crear un nuevo warehouse

const createRequestFuncion = async (req, res) => {

};

// funcion para actualizar un warehouse
const UpdateVehicleRequest = async (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;

  try {
    const warehouseUpdate = await pool.query(
      "UPDATE warehouses SET name = ?, location = ? WHERE id = ?",
      [name, location, id]
    );
    res.status(201).json({
      message: "warehouse updated successfully",
      data: warehouseUpdate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

// funcion para eliminar un warehouse

const deleteRequestFuncion = async (req, res) => {
  const id = req.params.id;

  try {
    const warehouseDelete = await pool.query(
      "DELETE FROM warehouses WHERE id = ?",
      [id]
    );
    res.status(201).json({
      message: "warehouse deleted successfully",
      data: warehouseDelete[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

warehouseRouter.get("/", getWarehouses);
warehouseRouter.get("/:id", getWarehouseByiD);

warehouseRouter.post("/", createRequestFuncion);
warehouseRouter.put("/:id", UpdateVehicleRequest);

warehouseRouter.delete("/:id", deleteRequestFuncion);
