import ListingDetailsClient from "./listen-client";

interface ListingProps {
  params: Promise<{ id: string }>;
}

export default async function ListingDetails({ params }: ListingProps) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/listing/${id}`,
    { cache: "no-store" } // SSR equivalent
  );

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
