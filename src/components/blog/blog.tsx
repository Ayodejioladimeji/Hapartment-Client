import React from "react";
import BlogCard from "./blogcard";
import Heading from "../Heading";

//

const blogs = [
  {
    id: 1,
    title: "The Ultimate Guide to Buying Fabrics Online",
    content:
      "Shopping for fabrics online has revolutionized how we access materials for crafting, sewing, and designing. While online fabric stores offer convenience and variety, they can feel overwhelming, especially for first-time buyers. This guide walks you through the entire process—from understanding fabric terminology to making confident purchases—ensuring a seamless online fabric shopping experience.",
    date: "2024/12/26",
    image: "/images/fabric16.jpg",
    link: "/blogs/the-ultimate-guide-to-buying-fabrics-online",
  },
  {
    id: 2,
    title: "Top 10 Fabrics for Sewing Enthusiasts in 2025",
    content:
      "Discover the top fabrics for sewing enthusiasts in 2025. A curated guide to inspire your next project.",
    date: "2024/12/27",
    image: "/images/fabric12.jpg",
    link: "/blogs/top-10-fabrics",
  },
  {
    id: 3,
    title: "How to Choose the Best Fabric for Your Project",
    content:
      "Learn how to choose the best fabric for your project with this comprehensive guide. Perfect for sewing enthusiasts, designers, and DIY lovers.",
    date: "2024/12/28",
    image: "/images/fabric2.jpg",
    link: "/blogs/how-to-choose-the-best-fabric",
  },
  {
    id: 4,
    title: "The Difference Between Cotton, Linen, and Polyester Fabrics",
    content:
      "Choosing the right fabric can make or break your sewing or design project. Cotton, linen, and polyester are some of the most popular fabrics in the world, but they each have distinct characteristics. In this guide, we’ll explore their differences, advantages, and best uses to help you make an informed decision.",
    date: "2024/12/29",
    image: "/images/fabric9.jpg",
    link: "/blogs/the-difference",
  },
];

const Blog = () => {
  //

  return (
    <div className="blog">
      <div className="container">
        <Heading
          title="Insights and Stories from StitchPafet"
          text="Explore the latest updates, styling tips, and customer success stories from StitchPafet. Dive into our blogs to discover how we’re making a difference in the world of fabrics and fashion."
        />

        <div className="row" style={{ marginTop: "100px" }}>
          {blogs?.map((item, index) => {
            return <BlogCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
