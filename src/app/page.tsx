import Blog from "@/components/blog/blog";
import Connect from "@/components/connect";
import Different from "@/components/different";
import Download from "@/components/download";
import Hero from "@/components/hero";
import Places from "@/components/places";
import Property from "@/components/property";
import SafetyTips from "@/components/safetytips";
import Search from "@/components/search";
import Steps from "@/components/steps";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Apartments & Houses for Rent in Nigeria | Verified Listings",
  description:
    "Discover verified apartments, houses, and properties for rent across Nigeria with Hapartment. Search thousands of listings in Lagos, Abuja, Port Harcourt, and more. Find your perfect home today.",
  openGraph: {
    title: "Find Apartments & Houses for Rent in Nigeria | Verified Listings",
    description:
      "Discover verified apartments, houses, and properties for rent across Nigeria with Hapartment. Search thousands of listings in Lagos, Abuja, Port Harcourt, and more. Find your perfect home today.",
    url: "https://www.hapartment.org",
    siteName: "Hapartment",
    images: [
      {
        url: "https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg",
        width: 1200,
        height: 630,
        alt: "Find Apartments & Houses for Rent in Nigeria | Verified Listings",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Apartments & Houses for Rent in Nigeria | Verified Listings",
    description:
      "Discover verified apartments, houses, and properties for rent across Nigeria with Hapartment. Search thousands of listings in Lagos, Abuja, Port Harcourt, and more. Find your perfect home today.",
    images: [
      "https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.hapartment.org",
  },
};


export default function index() {
  return (
    <>
      <Hero />
      <Connect />
      <Steps />
      <Search />
      <Different />
      <Property />
      <SafetyTips />
      <Places />
      <Blog />
      <Download />
    </>
  );
}
