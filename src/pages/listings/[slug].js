import Image from "next/image";
import banner1 from "../../../public/images/banner1.jpeg";
import banner2 from "../../../public/images/banner2.jpeg";
import banner3 from "../../../public/images/banner3.jpeg";
import banner4 from "../../../public/images/banner4.jpeg";
import banner5 from "../../../public/images/banner5.jpeg";
import Description from "./../../components/description";
import { FaBath, FaBed, FaToilet } from "react-icons/fa";
import { useRouter } from "next/router";
import Slider from "@/common/Slider";
import { getDataApis } from "@/utils/fetchData";
import Map from "./../../utils/map";
import Head from "next/head";

//

const ListingDetails = (props) => {
  const router = useRouter();

  const {
    address,
    property_type,
    price,
    bathrooms,
    bedrooms,
    toilets,
    images,
    map,
  } = props.listing;

  return (
    <>
      <Head>
        <title>Listing Details</title>
        <meta
          name="description"
          content="Hapartment is bringing agents with renters together by providing them with the simplest and most cost-effective route to renting properties online"
        />
        <meta
          name="keywords"
          content="Hapartment, hapartments, Hapartments, hapartment, real estate, agents, landlord, tenant, renting website, apartment, rent house, leasing house "
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="Hapartment - Homepage" />
        <meta
          property="og:title"
          content="We help users search for apartment easily and provide them with adequate information to help them make well-informed decisions."
        />
        <meta
          property="og:description"
          content="Hapartment is bringing agents with renters together by providing them with the simplest and most cost-effective route to renting properties online"
        />

        <meta property="og:image" content={images[0].url} />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://hapartment.org/" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="robots" content="index, nofollow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Hapartment Digital Marketplace" />

        <meta
          property="og:site_name"
          content="Hapartment Digital Marketplace"
        />
        <meta name="twitter:image:alt" content="Hapartment" />
      </Head>

      <section className="white">
        <div className="container">
          <div className="row">
            <div className="listing-details col-lg-9 mt-5">
              <div className="back mb-4">
                <button className="back-button" onClick={() => router.back()}>
                  <i className="bi bi-chevron-left"></i> Go back
                </button>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <h3>{property_type}</h3>
                  <div className="address">
                    <i className="bi bi-geo-alt-fill"></i>
                    {address}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="price float-md-end float-sm-start">
                    ₦ {price}
                  </div>
                </div>
              </div>

              <div className="carousel-container my-4">
                <Slider images={images} />
              </div>

              {/* details */}
              <div className="details">
                <div className="details-box">
                  <FaBed className="details-icons" />
                  {bedrooms}{" "}
                  {bedrooms === "1"
                    ? "Bedroom"
                    : bedrooms === "2" ||
                      bedrooms === "3" ||
                      bedrooms === "4" ||
                      bedrooms === "5+"
                    ? "Bedrooms"
                    : ""}
                </div>
                <div className="details-box">
                  <FaBath className="details-icons" />
                  {bathrooms} Bathrooms
                </div>
                <div className="details-box">
                  <FaToilet className="details-icons" />
                  {toilets} Toilets
                </div>
              </div>

              <div className="details-tab mt-5">
                <div className="tab-section">
                  <div className="deliver-box">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#description"
                        >
                          Description
                        </a>
                      </li>
                      {map[0] !== null && (
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#map"
                          >
                            View map
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="tab-content">
                    <div className="tab-pane active" id="description">
                      <div className="package-box mt-4 px-4 py-3">
                        <Description item={props.listing} />
                      </div>
                    </div>

                    <div className="tab-pane" id="map">
                      <div className="package-box mt-4 py-3">
                        {map[0] !== null && (
                          <Map lat={map[0].latitude} lng={map[0].longitude} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="disclaimer my-5">
                <h6>Disclaimer</h6>
                <p>
                  Hapartment Digital Marketplace makes no warranty as to the
                  accuracy or completeneness of the advertisement or any linked
                  or associated information on the information displayed about
                  this property, and Hapartment Digital Marketplace has no
                  control over the content.
                </p>
                <p>
                  Hapartment Digital Marketplace shall not in any way be held
                  liable for the actions of any agent or landlord on or off this
                  website.
                </p>
              </div>
            </div>

            <div className="col-lg-3 mt-5">
              {/* Agent infor section */}
              <div className="agent-section advert-image-box mb-5">
                <div className="agent-center">
                  <div className="agent-image">
                    <Image src={banner1} alt="picture" />
                  </div>

                  <div className="agent-content">
                    <h4>Hapartment Admin</h4>
                    <p>@hapartment</p>
                  </div>
                </div>

                <div className="btn">
                  <i class="bi bi-telephone-forward"></i>
                  08023232323
                </div>
              </div>

              <div className="advert-image-box mb-5">
                <Image src={banner1} alt="picture" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner5} alt="picture" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner2} alt="picture" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner3} alt="picture" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner4} alt="picture" priority={true} />
              </div>

              <div className="adverts-box mb-3">
                Place your Banner Adverts here
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingDetails;

export async function getStaticPaths() {
  const response = await getDataApis("/all_listing");
  const thePaths = response.data.map((item) => {
    return { params: { slug: item._id } };
  });

  return {
    paths: thePaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await getDataApis("/all_listing");
  const thelistings = response.data.filter(
    (item) => item._id === context.params.slug
  )[0];

  return {
    props: {
      listing: thelistings,
    },
  };
}
