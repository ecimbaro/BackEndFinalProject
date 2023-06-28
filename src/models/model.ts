import mongoose, { Document, Schema } from "mongoose";

export interface ICountry extends Document {
  capital: string,
  code: string,
  callingCode: string
  flagImageUri: string,
  name: string,
  numRegions: number,
  wikiDataId: string
}

const CountrySchema = new Schema({
  capital: String,
  code: String,
  callingCode: String,
  flagImageUri: String,
  name: String,
  numRegions: Number,
  wikiDataId: String
});

export default mongoose.model<ICountry>("Model", CountrySchema,"countries");
