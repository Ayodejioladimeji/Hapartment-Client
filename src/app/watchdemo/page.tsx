import BreadCumb from "@/common/breadcumb";
import Image from "next/image";
import videoImage from "/public/images/video-image.svg";
import watchdemoImage from "/public/images/watchdemo-image.svg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch a demo",
  description:
    "Hapartment is a new way to find your new home. We make it simple and convenient, so you can focus on finding a place you love. Use Hapartment to explore hundreds of properties in your area; get detailed information about the apartment that interests you and filter through hundreds of similar apartments for sale with ease.",
  openGraph: {
    title: "Watch a demo",
    description:
      "Hapartment is a new way to find your new home. We make it simple and convenient, so you can focus on finding a place you love. Use Hapartment to explore hundreds of properties in your area; get detailed information about the apartment that interests you and filter through hundreds of similar apartments for sale with ease.",
    url: "https://www.hapartment.org",
    siteName: "Hapartment",
    images: [
      {
        url: "https://res.cloudinary.com/hapartments/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.17_PM_1_qix3ml.jpg",
        width: 1200,
        height: 630,
        alt: "Watch a demo of Hapartment",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch a demo",
    description:
      "Discover how Hapartment makes renting easier. Watch a demo and see how you can browse, filter, and find apartments effortlessly.",
    images: [
      "https://res.cloudinary.com/hapartments/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.17_PM_1_qix3ml.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.hapartment.org",
  },
};



const WatchDemo = () => {
  return (
    <>
      <BreadCumb
        headingOne="Hapartment Digital Marketplace"
        headingTwo=""
        subHeading="Watch a demo"
        body="We give you the ability to research, compare and see what offers are available for your next permanent residence. You will be able to see before hand if it is a suitable area and provides what you need and want in a home. "
        image={watchdemoImage}
      />

      <section className="green">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-12 mx-auto">
              <div className="demo-image">
                <Image src={videoImage} alt="video" title="picture" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchDemo;
