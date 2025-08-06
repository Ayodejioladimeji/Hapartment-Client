import Image from "next/image";
import appstore from "../../../public/images/appstore.svg";
import playstore from "../../../public/images/playstore.svg";
import howtoImage from "../../../public/images/howto-image.svg";
import video from "../../../public/images/video.svg";
import how1 from "../../../public/images/how1.svg";
import how2 from "../../../public/images/how2.svg";
import how3 from "../../../public/images/how3.svg";
import how4 from "../../../public/images/how4.svg";
import how5 from "../../../public/images/how5.svg";
import how6 from "../../../public/images/how6.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hapartment How To - Your Rental Listings on How To Create Listings",
  description:
    "Receive top-notch apartment listings from some of the most reputable real estate managers. We are committed to delivering the safest apartment search experience on both web and app. View and schedule your visit directly from our site or your mobile device, with all availability and pricing updated daily.",
  openGraph: {
    title: "Hapartment How To - Your Rental Listings on How To Create Listings",
    description:
      "Step-by-step guide to creating property listings on Hapartment. Learn how to post, manage, and optimize your listings for maximum visibility.",
    url: "https://www.hapartment.org/howto",
    siteName: "Hapartment",
    images: [
      {
        url: "https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg",
        width: 1200,
        height: 630,
        alt: "Hapartment How To",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hapartment How To - Your Rental Listings on How To Create Listings",
    description:
      "Step-by-step guide to creating property listings on Hapartment.",
    images: [
      "https://res.cloudinary.com/hapartments/image/upload/v1676329183/WhatsApp_Image_2023-02-11_at_2.50.17_PM_kf0udz.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.hapartment.org/howto",
  },
};

const HowTo = () => {

  //

  return (
    <>
      <section className="white">
        <div className="container">
          <div className="row how-to-box d-flex mt-5">
            <div className="col-md-6 how-to-left">
              <h1
                className="mb-3"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="400"
              >
                How to create Listings
              </h1>

              <p
                className="mb-3"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="600"
              >
                A great platform for you to advertise your listings for free
                with high volumes of serious agents and renters browsing our
                site.
              </p>

              <div className="d-flex align-items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.layobright.hapartment"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="800"
                    src={appstore}
                    alt="picture"
                    className="appstore-image"
                    title="picture"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.layobright.hapartment"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="1000"
                    src={playstore}
                    alt="picture"
                    className="playstore-image"
                    title="picture"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-6 how-to-right">
              <Image
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="800"
                src={howtoImage}
                alt="picture"
                className="howto-image"
                title="picture"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="green">
        <div className="container">
          <div className="row watch-video-box">
            <div className="col-md-6 watch-video-left">
              <div className="underline mb-3"></div>
              <h3 className="mb-3">Watch Video</h3>

              {/* <p className="mb-3">
                A great platform for you to advertise your products for free
                with high volumes of serious agents and renters browsing our
                site.
              </p> */}
              <p className="mb-3">
                Looking to streamline your listing creation? We've got you
                covered! Watch our informative video guide designed to help you
                create listings quickly and effortlessly. Whether you're a
                beginner or looking for advanced tips, this video has insights
                to make your process smoother.{" "}
              </p>
              <p className="mb-3">
                Save time, enhance your efficiency, and create standout listings
                by watching our video guide. Let's make your listings process
                fast and easy! 🚀
              </p>
            </div>

            <div className="col-md-6 watch-video-image-box">
              <Image
                src={video}
                alt="picture"
                className="video"
                title="picture"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="row step-one-box">
            <div className="col-md-6 step-one-image-box">
              <Image src={how1} alt="picture" title="picture" />
            </div>

            <div className="col-md-6 step-one-right">
              <div className="underline mb-3"></div>
              <h3 className="mb-3">Step One</h3>

              <p className="mb-3">
                Download our mobile app from play store or apple store and Login
                into your account
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="green">
        <div className="container">
          <div className="row watch-video-box">
            <div className="col-md-6 watch-video-left">
              <div className="underline mb-3"></div>
              <h3 className="mb-3">Step Two</h3>

              <p className="mb-3">Proceed to the user account settings</p>
              <p className="mb-3">
                Click on “List Property” to get started with your listings
              </p>
            </div>

            <div className="col-md-6 watch-video-image-box">
              <Image src={how2} alt="picture" title="picture" />
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="row step-one-box">
            <div className="col-md-6 step-one-image-box">
              <Image src={how3} alt="picture" title="picture" />
            </div>

            <div className="col-md-6 step-one-right">
              <div className="underline mb-3"></div>
              <h3 className="mb-3">Step Three</h3>

              <p className="mb-3">
                Select <b>“Basic Information”</b> to provide the required
                information about the property
              </p>
              <p className="mb-3">
                <b> Follow the below Format</b>
              </p>
              <ol>
                <li>
                  Address - e.g 12 Akowonjo street, Computer village, Ikeja
                  Lagos
                </li>
                <li>Property type - e.g Self contain</li>
                <li>State- e.g Lagos</li>
                <li>City - e.g Ikeja</li>
                <p>
                  <b>Click Save and continue...</b>
                </p>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="green">
        <div className="container">
          <div className="row watch-video-box">
            <div className="col-md-6 watch-video-left">
              <div className="underline mb-3"></div>
              <h3 className="mb-3">Step Four</h3>

              <p className="mb-3">
                Select <b>“Property Details” </b> to provide details about the
                property
              </p>
              <p className="mb-3">
                <b> Follow the below Format</b>
              </p>
              <ol>
                <li>Number of bathrooms - e.g 2</li>
                <li>Number of toilets - e.g 2</li>
                <li>Furnishing - e.g Semi-furnished</li>
                <li>
                  Home facilities - e.g Tiled floor, Kitchen cabinets etc...
                </li>
                <li>
                  Area facilities - e.g Hospital, School, Public transport
                  etc...
                </li>

                <p>
                  <b>Click Save and continue...</b>
                </p>
              </ol>
            </div>

            <div className="col-md-6 watch-video-image-box">
              <Image src={how4} alt="picture" title="picture" />
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="row step-one-box">
            <div className="col-md-6 step-one-image-box">
              <Image src={how5} alt="picture" title="picture" />
            </div>

            <div className="col-md-6 step-one-right">
              <div className="underline mb-3"></div>
              <h3 className="mb-3">Step Five</h3>

              <p className="mb-3">
                Select <b>“Add Description”</b> to provide full description and
                price of the property
              </p>
              <p className="mb-3">
                <b> Follow the below Format</b>
              </p>
              <ol>
                <li>Category - e.g Recent apartment</li>
                <li>Price per annum - e.g 500,000</li>
                <li>
                  Property description- Give full and detailed description about
                  the property
                </li>
                <li>
                  Youtube video link (optional) - Provide the video url (e.g
                  https://youtube.com/my-video)
                </li>
                <p>
                  <b>Click Save and continue...</b>
                </p>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="green">
        <div className="container">
          <div className="row watch-video-box">
            <div className="col-md-6 watch-video-left">
              <div className="underline mb-3"></div>
              <h3 className="mb-3">Step Six</h3>

              <p className="mb-3">
                Select <b>“Add Property Images” </b> to upload the
                images/pictures of the property
              </p>

              <p>
                You must add all the seven fields provided for images, that
                means your listings should have seven (7) images in total.
              </p>

              <p>
                Once all required information about the property has been
                provided, click on
                <b> “Create Listing”</b> to create new property.
              </p>
            </div>

            <div className="col-md-6 watch-video-image-box">
              <Image src={how6} alt="picture" title="picture" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowTo;
