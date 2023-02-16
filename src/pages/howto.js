import Image from "next/image";
import Head from "next/head";
import appstore from "../../public/images/appstore.svg";
import playstore from "../../public/images/playstore.svg";
import howtoImage from "../../public/images/howto-image.svg";
import video from "../../public/images/video.svg";
import how1 from "../../public/images/how1.svg";
import how2 from "../../public/images/how2.svg";
import how3 from "../../public/images/how3.svg";
import how4 from "../../public/images/how4.svg";
import how5 from "../../public/images/how5.svg";
import how6 from "../../public/images/how6.svg";

const HowTo = () => {
  return (
    <>
      <Head>
        <title>Hapartment - How To Create Listings</title>
        <meta
          name="description"
          content="Hapartment is bringing agents with renters together by providing them with the simplest and most cost-effective route to renting properties online"
        />
        <meta
          name="keywords"
          content="Hapartment, hapartment, real estate, agents, landlord, tenant, rentingwebsite, apartment, renthouse, leasinghouse "
        />
        <meta
          property="og:title"
          content="Hapartment - How to create Listings"
        />
        <meta
          property="og:description"
          content="A great platform for you to advertise your products for free
          with high volumes of serious agents and renters browsing our
          site."
        />

        <meta
          property="og:url"
          content="https://hapartment-client.vercel.app/howto"
        />
        <meta name="twitter:card" content="Hapartment" />

        <meta name="robots" content="index, nofollow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Hapartment Digital Marketplace" />

        <meta
          property="og:site_name"
          content="Hapartment Digital Marketplace"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dewqmrtqo/image/upload/v1676329182/WhatsApp_Image_2023-02-11_at_2.50.17_PM_1_qix3ml.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>

      <section className="white">
        <div className="container">
          <div className="row how-to-box d-flex">
            <div className="col-md-6 how-to-left">
              <h1 className="mb-3">How to create Listings</h1>

              <p className="mb-3">
                A great platform for you to advertise your products for free
                with high volumes of serious agents and renters browsing our
                site.
              </p>

              <div className="d-flex align-items-center">
                <Image
                  src={appstore}
                  alt="picture"
                  className="appstore-image"
                  title="picture"
                />
                <Image
                  src={playstore}
                  alt="picture"
                  className="playstore-image"
                  title="picture"
                />
              </div>
            </div>

            <div className="col-md-6 how-to-right">
              <Image
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

              <p className="mb-3">
                A great platform for you to advertise your products for free
                with high volumes of serious agents and renters browsing our
                site.
              </p>
              <p className="mb-3">
                You can also follow the steps below to get your Listing approved
                in just few minutes.
              </p>
              <p className="mb-3">
                Meanwhile, if you do not follow the guidelines provided your
                listings might be rejected.
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
                Download our mobile app from playstore or appstore and Login
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
                <li>Address - 12 Akowonjo street, Ikeja lagos</li>
                <li>Price per annum - 500,000</li>
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
              <h3 className="mb-3">Step Four</h3>

              <p className="mb-3">
                Select <b>“Property Details” </b> to provide details about the
                property
              </p>
              <p className="mb-3">
                <b> Follow the below Format</b>
              </p>
              <ol>
                <li>Number of bathrooms - 2</li>
                <li>Number of toilets - 2</li>
                <li>Furnishing - Semi-furnished</li>
                <li>Home facilities - Tiled floor, Kitchen cabinets etc...</li>
                <li>
                  Area facilities - Hospital, School, Public transport etc...
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
                <li>Category - new</li>
                <li>Price per annum - 500,000</li>
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
                Once all requierd information about the property has been
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
