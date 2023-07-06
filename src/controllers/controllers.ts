import { Request, Response } from "express";
import Model, { ICountry } from "../models/model";
import axios from 'axios'
require('dotenv').config()



export const addCountry = async (req: Request, res: Response) => {
  let API_KEY = process.env.RAPIDAPI_KEY || ""
  try {
    const countryID: string = req.params.country;

    const options = {
      method: 'GET',
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryID}`,
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
    const { data } = await axios.request(options);
    console.log(data)
    const country: ICountry = new Model({
      capital: data.data.capital,
      code: data.data.code,
      callingCode: data.data.callingCode,
      flagImageUri: data.data.flagImageUri,
      name: data.data.name,
      numRegions: data.data.numRegions,
      wikiDataId: data.data.wikiDataId,
    })
    const createdCountry = await Model.create(country);

    return res.status(201).json({
      message: "Información guardada con éxito",
      country: createdCountry,
    });
  } catch (error) {
    res.status(500).json({ message: 'No pudo registrarse la información' });
  }
};

export const getCountry = async (req: Request, res: Response) => {
  try {
    const city = await Model.find();
    res.json(city);
  } catch (error) {
    res.status(500).json({ error: "No se encuentra la información solicitadad" });
  }
};

export const deleteCountry = async (req: Request, res: Response) => {
  try {
    const countryID = req.params.id;
    await Model.findByIdAndDelete(countryID);
    return res.json({ message: "Información eliminada" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const updateCountry = async (req: Request, res: Response) => {
  try {
    const countryID = req.params.id;
    const {
      capital,
      code,
      callingCode,
      flagImageUri,
      name,
      numRegions,
      wikiDataId
    } = req.body;
    await Model.findOneAndUpdate(
      { _id: countryID },
      { capital, code, callingCode, flagImageUri, name, numRegions, wikiDataId },
      { new: true }
    );
    res.status(200).json({ message: 'Información actualizada con éxito' })
  } catch (error) {
    res.json({ message: error })
  }

};