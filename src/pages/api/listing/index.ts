import connectDB from "../utils/connectDB";
import mongoose, { Document, Schema } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

// 1. Define an interface for your Listing document
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
  // Add other properties of your Listing model here
  createdAt: Date;
  updatedAt: Date;
}

// 2. Create the Mongoose Schema with the interface
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
    // Define other schema fields here
  },
  {
    timestamps: true,
  }
);

// 3. Create the Mongoose Model using the interface
const Listing =
  (mongoose.models.Listing as mongoose.Model<IListing>) ||
  mongoose.model<IListing>("Listing", ListingSchema);

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await fetchListings(req, res);
      break;

    default:
      res.status(405).json({ err: "Method Not Allowed" });
      break;
  }
}

const fetchListings = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      search,
      property_type,
      statename,
      cityname,
      toilets,
      min_price,
      max_price,
    } = req.query;

    const page = parseInt(req.query.page as string, 10) || 1;
    const pageSize = parseInt(req.query.pageSize as string, 10) || 10;

    const query: any = {};

    if (search && typeof search === "string") {
      const searchRegex = new RegExp(search, "i");
      query.$or = [
        { location: searchRegex },
        { statename: searchRegex },
        { cityname: searchRegex },
      ];
    }

    if (property_type && property_type !== "0") {
      query.title = { $regex: new RegExp(property_type as string, "i") };
    }

    if (statename) {
      query.statename = statename;
    }

    if (cityname) {
      query.cityname = cityname;
    }

    if (toilets) {
      query.toilets = parseInt(toilets as string, 10);
    }

    if (min_price || max_price) {
      query.price = {};
      if (min_price) {
        query.price.$gte = parseInt(min_price as string, 10);
      }
      if (max_price) {
        query.price.$lte = parseInt(max_price as string, 10);
      }
    }

    const totalCount = await Listing.countDocuments(query);

    // Specify the return type for clarity, though Mongoose usually infers this
    const listings: IListing[] = await Listing.find(query)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({ listings, totalCount, page, pageSize });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
