import MetaTags from "@/components/meta-tags";
import Link from "next/link";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <MetaTags
        title="Find Apartments & Houses for Rent in Nigeria | Verified Listings"
        description="Discover verified apartments, houses, and properties for rent across Nigeria with Hapartment. Search thousands of listings in Lagos, Abuja, Port Harcourt, and more. Find your perfect home today."
        image="https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg"
        canonicalUrl="https://www.hapartment.org"
      />

      <div>
        <h1 style={{ fontSize: "60px", fontWeight: "700" }}>404</h1>
        <h2>Page not found</h2>
        <Link href="/">Go home</Link>
      </div>
    </div>
  );
};
export default Error;
