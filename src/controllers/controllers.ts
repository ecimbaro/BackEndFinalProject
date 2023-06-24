import { Request, Response } from "express";
import Model, { IModel } from "../models/model";

export const AddProduct = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newProduct: IModel = new Model({
      name,
      description,
    });
    await newProduct.save();
    return res.status(201).json({
      message: "Producto creado con éxito",
    });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar el producto" });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Model.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "No se encuentra el producto" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params.id;
    await Model.findByIdAndDelete(productID);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateProducts = async (req: Request, res: Response) => {
  const productID = req.params.id;
  await Model.findByIdAndUpdate(productID);
  

};
