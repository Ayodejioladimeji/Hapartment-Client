import connectDB from "../utils/connectDB";
import Listing, { IListing } from "../models/listingModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search");
    const property_type = searchParams.get("property_type");
    const min_price = searchParams.get("min_price");
    const max_price = searchParams.get("max_price");
    const sorting = searchParams.get("sorting");

    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "48", 10);

    const query: mongoose.FilterQuery<IListing> = {};

    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$or = [
        { address: searchRegex },
        { location: searchRegex },
        { title: searchRegex },
      ];
    }

    if (property_type && property_type !== "0") {
      const propertyTypeRegex = new RegExp(property_type, "i");
      query.title = propertyTypeRegex;
    }

    if (min_price || max_price) {
      query.price = {};
      if (min_price) query.price.$gte = parseFloat(min_price);
      if (max_price) query.price.$lte = parseFloat(max_price);
    }

    let sortOptions: { [key: string]: 1 | -1 } = {};
    if (sorting === "lowest_price") sortOptions.price = 1;
    else if (sorting === "highest_price") sortOptions.price = -1;
    else sortOptions.createdAt = -1;

    const totalCount = await Listing.countDocuments(query);

    const listings = await Listing.find(query)
      .select("-listingUrl")
      .sort(sortOptions)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .lean();

    return NextResponse.json({ listings, totalCount, page, pageSize });
  } catch (error: any) {
    console.error("Error in fetchListings:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();
    const { ids } = body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { message: "Missing or invalid listing IDs" },
        { status: 400 }
      );
    }

    const listings = await Listing.find({ _id: { $in: ids } }).lean();
    if (!listings || listings.length === 0) {
      return NextResponse.json({ message: "Listings not found" }, { status: 404 });
    }

    const fileNames: string[] = listings
      .map((listing) => {
        const imageUrl: string = listing?.image;
        const fileName = imageUrl?.split("/").pop()?.split("-").slice(-1)[0];
        return fileName || null;
      })
      .filter((name): name is string => name !== null);

    // If needed, uncomment to delete Cloudinary images
    // if (fileNames.length > 0) {
    //   await deleteImagesWithFilenames(fileNames);
    // }

    await Listing.deleteMany({ _id: { $in: ids } });

    return NextResponse.json({
      message: `${listings.length} listings and related images deleted`,
    });
  } catch (error: any) {
    console.error("Error in deleteListings:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
