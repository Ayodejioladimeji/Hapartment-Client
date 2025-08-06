"use client"
import { useState } from "react";
import { blogs } from "@/constants/blogs";
import BlogCard from "@/components/blog/blogcard";

const BlogsComponent = () =>{
    const [blog, setBlog] = useState("");

    const filteredData = blogs?.filter((item) =>
        Object.values(item).join(" ").toLowerCase().includes(blog.toLowerCase())
    );

    return(
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
                {filteredData?.map((item, index) => (
                    <BlogCard key={index} {...item} />
                ))}
            </div>

            {filteredData?.length === 0 && (
                <p className="text-center">Blogs not found</p>
            )}
        </div>
    )
}

export default BlogsComponent