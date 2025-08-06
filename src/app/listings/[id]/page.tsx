import ListingDetailsClient from "./listen-client";
import type { Metadata } from "next";

interface ListingProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ListingProps): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listing/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "Listing not found | Hapartment",
      description: "Sorry, this property listing could not be found.",
    };
  }

  const data = await res.json();

  const { title, location, price, description, image } = data.listing || {};

  const canonicalURL = `${process.env.NEXT_PUBLIC_CLIENT_URL}/listings/${id}`;

  return {
    title: `${title} | ${location} | ₦${price?.toLocaleString()}`,
    description: description || "Discover this property available for rent on Hapartment.",
    openGraph: {
      title: `${title} | ${location} | ₦${price?.toLocaleString()}`,
      description: description || "View property details on Hapartment.",
      url: canonicalURL,
      siteName: "Hapartment",
      images: [
        {
          url: image || "https://www.hapartment.org/default-listing.jpg",
          width: 1200,
          height: 630,
          alt: title || "Property Listing",
        },
      ],
      locale: "en_NG",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${location} | ₦${price?.toLocaleString()}`,
      description: description || "Find this property on Hapartment.",
      images: [
        image || "https://www.hapartment.org/default-listing.jpg",
      ],
    },
    alternates: {
      canonical: canonicalURL,
    },
  };
}

export default async function ListingDetails({ params }: ListingProps) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listing/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch listing");
  }

  const data = await res.json();

  const listing = {
    ...data,
    images: Array.isArray(data.images)
      ? data.images.map((img: string) => ({ url: img }))
      : [],
  };

  return <ListingDetailsClient listing={listing} />;
}
