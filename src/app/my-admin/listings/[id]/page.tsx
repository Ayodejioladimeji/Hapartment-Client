import { notFound } from "next/navigation";
import ListingClient from "./listen-client";


interface ListingDetailsProps {
  params: any;
}

export default async function ListingDetails({ params }: ListingDetailsProps) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/listing/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const data = await res.json();

  return <ListingClient listing={data} />;
}
