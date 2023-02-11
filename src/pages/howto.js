import Image from "next/image";
import Head from "next/head";
import appstore from "../../public/appstore.svg";
import playstore from "../../public/playstore.svg";
import howtoImage from "../../public/howto-image.svg";
import video from "../../public/video.svg";
import how1 from "../../public/how1.svg";
import how2 from "../../public/how2.svg";
import how3 from "../../public/how3.svg";
import how4 from "../../public/how4.svg";
import how5 from "../../public/how5.svg";
import how6 from "../../public/how6.svg";

const HowTo = () => {
  return (
    <>
      <Head>
        <title>How to create listing</title>
        <meta
          name="A great platform for you to advertise your products for free
                with high volumes of serious agents and renters browsing our
                site."
        />
      </Head>

      <section className="white">
        <div className="container">
          <div className="row how-to-box d-flex">
            <div className="col-md-6 how-to-left">
              <h3 className="mb-3">How to create Listings</h3>

              <p className="mb-3">
                A great platform for you to advertise your products for free
                with high volumes of serious agents and renters browsing our
                site.
              </p>

              <div className="d-flex align-items-center">
                <Image src={appstore} alt="" className="appstore-image" />
                <Image src={playstore} alt="" className="playstore-image" />
              </div>
            </div>

            <div className="col-md-6 how-to-right">
              <Image src={howtoImage} alt="" className="howto-image" />
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
              <Image src={video} alt="" className="video" />
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="row step-one-box">
            <div className="col-md-6 step-one-image-box">
              <Image src={how1} alt="" />
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
              <Image src={how2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="row step-one-box">
            <div className="col-md-6 step-one-image-box">
              <Image src={how3} alt="" />
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
              <Image src={how4} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="row step-one-box">
            <div className="col-md-6 step-one-image-box">
              <Image src={how5} alt="" />
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
                <b>“Create Listing”</b> for create new property.
              </p>
            </div>

            <div className="col-md-6 watch-video-image-box">
              <Image src={how6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowTo;
