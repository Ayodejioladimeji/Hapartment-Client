import connectDB from "../../utils/connectDB";
import { NextRequest, NextResponse } from "next/server";
import mongoose, { Document, Schema, Types } from "mongoose";

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
  __v?: number;
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
  { timestamps: true }
);

const Listing =
  (mongoose.models.Listing as mongoose.Model<IListing>) ||
  mongoose.model<IListing>("Listing", ListingSchema);

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await context.params;

  if (!id || typeof id !== "string") {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  try {
    const listing = (await Listing.findById(id)
      .select("-listingUrl")
      .lean()) as unknown as IListingLean | null;

    if (!listing) {
      return NextResponse.json({ message: "Listing not found" }, { status: 404 });
    }

    return NextResponse.json({ listing }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
