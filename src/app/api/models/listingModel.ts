// models/listingModel.ts
import mongoose, { Document, Schema, Model } from "mongoose";

export interface IListing extends Document {
  description: string;
  title: string;
  address: string;
  descriptions: string;
  property_type: string;
  location: string;
  cityname: string;
  price: number;
  pricePeriod: String;
  agentName: string;
  agentPhones:any;
  agentAddress:string;
  createdAt: Date;
  updatedAt: Date;
  listingUrl?: string;
  image?:string;
  bedrooms:number;
  toilets:number;
  bathrooms:number
  Images?:any
}

const ListingSchema: Schema<IListing> = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, default: null },
    price: { type: Number, default: null },
    pricePeriod: { type: String, default: null },
    location: { type: String, default: null },
    listingUrl: { type: String, required: true, unique: true },
    bedrooms: { type: Number, default: null },
    toilets: { type: Number, default: null },
    bathrooms: { type: Number, default: null },
    description: { type: String, default: null },
    Images: { type: [String], default: null },
    agentName: { type: String, default: null },
    agentPhones: { type: [String], default: null },
    agentAddress: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

const Listing: Model<IListing> =
  (mongoose.models.Listing as Model<IListing>) ||
  mongoose.model<IListing>("Listing", ListingSchema);

export default Listing;
