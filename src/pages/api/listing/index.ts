import connectDB from "../utils/connectDB";
import Listing from "../models/listingModel";
import { NextApiRequest, NextApiResponse } from "next";

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
    const page = parseInt(req.query.page as string, 10) || 1;
    const pageSize = parseInt(req.query.pageSize as string, 10) || 10;

    // Fetch total count of active products
    const totalCount = await Listing?.countDocuments();

    // Randomly fetch paginated products where isActive is true
    const listings = await Listing.aggregate([
      { $sample: { size: totalCount } }, // Randomly sample all active products
      { $skip: (page - 1) * pageSize }, // Apply pagination skip
      { $limit: pageSize }, // Apply pagination limit
    ]);

    res.json({ listings, totalCount, page, pageSize });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
