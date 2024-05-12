import BreadCumb from "@/common/breadcumb";
import Image from "next/image";
import Head from "next/head";
import videoImage from "../../public/images/video-image.svg";
import watchdemoImage from "../../public/images/watchdemo-image.svg";
import MetaTags from "@/components/MetaTags";

const WatchDemo = () => {
  return (
    <>
      <MetaTags
        title="Watch Demo"
        description="Hapartment is a new way to find your new home. We make it simple and convenient, so you can focus on finding a place you love. Use Hapartment to explore hundreds of properties in your area; get detailed information about the apartment that interests you and filter through hundreds of similar apartments for sale with ease."
        route="watchdemo"
      />

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
