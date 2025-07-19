import connectDB from "../../utils/connectDB";
import mongoose, { Document, Schema, Types } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";


// middle ware function for the cors

interface IListing extends Document {
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

interface IListingLean {
  _id: string | Types.ObjectId;
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
  __v?: number; // Mongoose adds __v (version key) by default, and lean objects include it.
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

const Listing =
  (mongoose.models.Listing as mongoose.Model<IListing>) ||
  mongoose.model<IListing>("Listing", ListingSchema);

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const listing = (await Listing.findById(id as string)
      .select("-listingUrl")
      .lean()) as unknown as IListingLean | null;

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    return res.status(200).json({ listing });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
