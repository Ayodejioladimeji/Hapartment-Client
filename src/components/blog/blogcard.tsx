import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const BlogCard = (props) => {
  const router = useRouter();

  //
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
      onClick={() => router.push(props?.link)}
    >
      <div className="blog-card">
        <div className="blog-image">
          <Image
            src={props?.image}
            alt=""
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <div className="blog-content">
          <p className="blog-heading">{props?.title?.slice(0, 28) + "..."}</p>
          <p className="blog-subheading">
            {props?.content?.slice(0, 50) + "..."}
          </p>
          <small>{moment(props?.date).format("ll")}</small>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
