import Breadcumb from "@/components/breadcumb";
import { FC} from "react";
import type { Metadata } from "next";
import BlogsComponent from "./blogs";

export const metadata: Metadata = {
  title: "Blogs | Hapartment Blog: Your Guide to Effortless Renting",
  description:
    "Discover expert advice, market trends, and helpful tips to navigate the rental world with ease. Whether you're searching for your next home or looking to make the most of your current space, our blog is your go-to resource.",
  openGraph: {
    title: "Blogs | Hapartment Blog: Your Guide to Effortless Renting",
    description:
      "Discover expert advice, market trends, and helpful tips to navigate the rental world with ease. Whether you're searching for your next home or looking to make the most of your current space, our blog is your go-to resource.",
    url: "https://www.hapartment.org/blogs",
    siteName: "Hapartment",
    images: [
      {
        url: "https://www.hapartment.org/listings/five.jpg",
        width: 1200,
        height: 630,
        alt: "Hapartment Blog - Renting Tips & Trends",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Hapartment Blog: Your Guide to Effortless Renting",
    description:
      "Expert advice, market trends, and tips for easy renting. Explore Hapartment Blog.",
    images: ["https://www.hapartment.org/listings/five.jpg"],
  },
  alternates: {
    canonical: "https://www.hapartment.org/blogs",
  },
};

const BlogPage: FC = () => {


  return (
    <div className="guide-container">
      <header
        className="guide-header bg-dark"
        style={{ backgroundImage: `url("/listings/five.jpeg")` }}
      >
        <div className="container">
          <div className="heading-section">
            <Breadcumb title="Blogs" />
          </div>

          <h1 className="coloured">
            Renting Made Easy: Tips & Trends from the Hapartment Blog
          </h1>
          <p>
            Discover expert advice, market trends, and helpful tips to navigate
            the rental world with ease. Whether you're searching for your next
            home or looking to make the most of your current space, our blog is
            your go-to resource.
          </p>
        </div>
      </header>

      <BlogsComponent/>
    </div>
  );
};

export default BlogPage;
