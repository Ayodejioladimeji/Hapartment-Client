import MetaTags from "@/components/meta-tags";
import Listing from "./listing";

const Listings = () => {

  return (
    <div>
      <MetaTags
        title="Hapartment Listings - Browse Apartments & Houses for Rent in Nigeria"
        description="Explore thousands of verified listings for apartments, houses, and properties for rent across Nigeria. Find your ideal home in Lagos, Abuja, Port Harcourt, and other cities with Hapartment."
        image="https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg"
        canonicalUrl="https://www.hapartment.org/listings"
      />

      <Listing/>
    </div>
  );
};

export default Listings;