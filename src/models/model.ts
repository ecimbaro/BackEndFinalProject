import mongoose, { Document, Schema } from "mongoose";

export interface IModel extends Document {
  name: string;
  description: string;
}

const ProductSchema = new Schema({
  name: String,
  description: String,
});

export default mongoose.model<IModel>("Model", ProductSchema);
