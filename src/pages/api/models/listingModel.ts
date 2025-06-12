import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    descriptions: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: [],
    },
    bedrooms: {
      type: String,
      default: "",
    },
    bathrooms: {
      type: String,
      default: "",
    },
    toilets: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      required: true,
    },
    agent_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let Dataset =
  mongoose.models.listing || mongoose.model("listing", listingSchema);
export default Dataset;
