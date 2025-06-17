import React from "react";
import BlogCard from "./blogcard";
import { blogs } from "@/constants/blogs";

const Blog = () => {
  //

  return (
    <section className="container">
      <h3 className="coloured">
        <span>Renting Made Easy: Tips & Trends from the Hapartment Blog</span>
      </h3>
      <p>
        Discover expert advice, market trends, and helpful tips to navigate the
        rental world with ease. Whether you're searching for your next home or
        looking to make the most of your current space, our blog is your go-to
        resource.
      </p>

      <div className="row" style={{ marginTop: "100px" }}>
        {blogs?.slice(0, 4)?.map((item, index) => {
          return <BlogCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Blog;
