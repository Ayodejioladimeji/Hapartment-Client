// pages/api/listings.ts
import connectDB from "../utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import Listing, { IListing } from "../models/listingModel";
import mongoose from "mongoose";

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
    const { search, property_type, min_price, max_price, sort } = req.query;

    const page = parseInt(req.query.page as string, 10) || 1;
    const pageSize = parseInt(req.query.pageSize as string, 10) || 10;

    const query: mongoose.FilterQuery<IListing> = {};

    if (search && typeof search === "string") {
      const searchRegex = new RegExp(search, "i");
      query.$or = [
        { address: searchRegex },
        { statename: searchRegex },
        { cityname: searchRegex },
      ];
    }

    if (property_type && property_type !== "0") {
      query.property_type = {
        $regex: new RegExp(property_type as string, "i"),
      };
    }

    if (min_price || max_price) {
      query.price = {};
      if (min_price) {
        query.price.$gte = parseFloat(min_price as string);
      }
      if (max_price) {
        query.price.$lte = parseFloat(max_price as string);
      }
    }

    let sortOptions: { [key: string]: 1 | -1 } = {};
    if (sort) {
      if (sort === "lowest_price") {
        sortOptions.price = 1;
      } else if (sort === "highest_price") {
        sortOptions.price = -1;
      }
    } else {
      sortOptions.createdAt = -1;
    }

    const totalCount = await Listing.countDocuments(query);

    const listingsQuery = Listing.find(query).sort(
      "-createdAt"
    ) as mongoose.Query<IListing[], IListing>;

    const listings = await listingsQuery
      .select("-listingUrl")
      .sort(sortOptions)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .lean();

    res.status(200).json({ listings, totalCount, page, pageSize });
  } catch (error: any) {
    console.error("Error in fetchListings:", error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};
