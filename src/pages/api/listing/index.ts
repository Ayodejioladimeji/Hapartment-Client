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
    // Destructure query parameters, matching frontend names
    const { search, property_type, min_price, max_price, sorting } = req.query;

    const page = parseInt(req.query.page as string, 10) || 1;
    const pageSize = parseInt(req.query.pageSize as string, 10) || 48; // Match frontend's PageSize

    const query: mongoose.FilterQuery<IListing> = {};

    // 1. Search (City/State/Address)
    if (search && typeof search === "string") {
      const searchRegex = new RegExp(search, "i");
      query.$or = [
        { address: searchRegex },
        { location: searchRegex }, // Assuming 'location' field stores city/state
        { title: searchRegex } // Also search within title if it contains location info
      ];
    }

    // 2. Filter by Property Type (using 'title' field)
    if (property_type && property_type !== "0" && typeof property_type === "string") {
      // Use a regex to match the property type anywhere in the title
      // This is flexible, e.g., "2 Bedroom Flat" will match a title "Spacious 2 Bedroom Flat for Rent"
      const propertyTypeRegex = new RegExp(property_type, "i");
      query.title = propertyTypeRegex;
    }

    // 3. Filter by Price Range
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

    // 4. Sort by Price (Lowest/Highest) or Default
    if (sorting && typeof sorting === "string") {
      if (sorting === "lowest_price") {
        sortOptions.price = 1; // Ascending order for lowest price
      } else if (sorting === "highest_price") {
        sortOptions.price = -1; // Descending order for highest price
      }
    } else {
      // Default sorting: Newest first
      sortOptions.createdAt = -1;
    }

    const totalCount = await Listing.countDocuments(query);

    const listings = await Listing.find(query)
      .select("-listingUrl") // Exclude listingUrl from results if not needed
      .sort(sortOptions) // Apply the determined sort options
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .lean(); // Use .lean() for faster query results (plain JS objects)

    res.status(200).json({ listings, totalCount, page, pageSize });
  } catch (error: any) {
    console.error("Error in fetchListings:", error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};