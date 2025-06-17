import Breadcumb from "@/components/breadcumb";
import BlogCard from "@/components/blog/blogcard";
import MetaTags from "@/components/meta-tags";
import { blogs } from "@/constants/blogs";
import { FC, useState } from "react";

const BlogPage: FC = () => {
  const [blog, setBlog] = useState("");

  // search function
  const filteredData = blogs?.filter((item) => {
    return Object.values(item).join(" ").toLowerCase().match(blog);
  });

  //

  return (
    <>
      <MetaTags
        title="Blogs | Affordable fabrics online"
        description="Explore the latest updates, styling tips, and customer success stories from StitchPafet. Dive into our blogs to discover how we’re making a difference in the world of fabrics and fashion."
        image="/images/fabric13.jpeg"
        canonicalUrl="https://www.stitchpafet.com/blogs"
      />
      <div className="guide-container">
        <header
          className="guide-header"
          style={{ backgroundImage: `url("/images/fabric13.jpeg")` }}
        >
          <div className="container">
            <div className="heading-section">
              <Breadcumb title="Blogs" />
            </div>

            <h1>Insights and Stories from StitchPafet</h1>
            <p>
              {`Explore the latest updates, styling tips, and customer success stories from StitchPafet. Dive into our blogs to discover how we’re making a difference in the world of fabrics and fashion.`}
            </p>
          </div>
        </header>

        <div className="container">
          <input
            type="search"
            placeholder="Search blogs"
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
          />
          <div
            className="row"
            style={{ marginTop: "100px", marginBottom: "100px" }}
          >
            {filteredData?.map((item, index) => {
              return <BlogCard key={index} {...item} />;
            })}
          </div>

          {filteredData?.length === 0 && (
            <p className="text-center">Blogs not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
