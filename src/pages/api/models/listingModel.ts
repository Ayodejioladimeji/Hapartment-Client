// models/listingModel.ts
import mongoose, { Document, Schema, Model } from "mongoose";

export interface IListing extends Document {
  toilets: number;
  description: string;
  name: string;
  address: string;
  descriptions: string;
  property_type: string;
  statename: string;
  cityname: string;
  price: number;
  agent_name: string;
  createdAt: Date;
  updatedAt: Date;
  listingUrl?: string;
}

const ListingSchema: Schema<IListing> = new Schema(
  {
    toilets: { type: Number, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    descriptions: { type: String, required: true },
    property_type: { type: String, required: true },
    statename: { type: String, required: true },
    cityname: { type: String, required: true },
    price: { type: Number, required: true },
    agent_name: { type: String, required: true },
    listingUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

const Listing: Model<IListing> =
  (mongoose.models.Listing as Model<IListing>) ||
  mongoose.model<IListing>("Listing", ListingSchema);

export default Listing;
