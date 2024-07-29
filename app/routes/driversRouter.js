import { Router } from "express";
import { pool } from "../../config/db.js";

export const routerDriver = Router();

// funcion para obtener a todos los drivers

const getDriversRequest = async (_, res) => {
  
};

//funcion para obtener a un driver por el id

const getDriverByIdRequest = async (req, res) => {
  const id = req.params.id;

  const driver = await pool.query("SELECT * FROM drivers WHERE id = ?", [id]);

  res.status(200).json({
    message: "Driver fetched successfully",
    data: driver[0],
  });
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

//funcion para crear a un driver

const createDriversRequest = async (req, res) => {
  const { name } = req.body;

  
};

//funcion para actualizar un driver

const updateDriverRequest = async (req, res) => {
  const { id, name } = req.body;
  const driver = await pool.query("UPDATE drivers SET name =? WHERE id =?", [
    name,
    id,
  ]);

  res.status(200).json({
    message: "Driver updated successfully",
    data: driver,
  });
};

const deleteDriverRequest = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteDriver = await pool.query("DELETE FROM drivers WHERE id = ?", [
      id,
    ]);

    res.status(200).json({
      message: "Driver deleted successfully",
      data: deleteDriver,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

routerDriver.get("/", getDriversRequest);
routerDriver.get("/:id", getDriverByIdRequest);
routerDriver.post("/", createDriversRequest);
routerDriver.put("/:id", updateDriverRequest);
routerDriver.delete("/:id", deleteDriverRequest);
