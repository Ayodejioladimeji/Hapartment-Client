import Listing from "./listing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hapartment Listings - Browse Apartments & Houses for Rent in Nigeria",
  description:
    "Explore thousands of verified listings for apartments, houses, and properties for rent across Nigeria. Find your ideal home in Lagos, Abuja, Port Harcourt, and other cities with Hapartment.",
  openGraph: {
    title: "Hapartment Listings - Browse Apartments & Houses for Rent in Nigeria",
    description:
      "Explore thousands of verified listings for apartments, houses, and properties for rent across Nigeria.",
    url: "https://www.hapartment.org/listings",
    siteName: "Hapartment",
    images: [
      {
        url: "https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg",
        width: 1200,
        height: 630,
        alt: "Browse verified apartments and houses in Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hapartment Listings - Browse Apartments & Houses for Rent in Nigeria",
    description:
      "Explore thousands of verified listings for apartments, houses, and properties for rent across Nigeria.",
    images: [
      "https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.hapartment.org/listings",
  },
};

export default function Listings() {
  return (
    <div>
      <Listing />
    </div>
  );
}
