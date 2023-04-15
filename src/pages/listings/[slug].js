import Image from "next/image";
import profileImg from "../../../public/images/profile-img.svg";
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
import ReactWhatsapp from "react-whatsapp";

//

const ListingDetails = (props) => {
  const router = useRouter();
  const p = router.asPath.slice(1);
  const canonicalURL = `https://hapartment.org/${p}`.split("?")[0];

  const {
    _id,
    address,
    property_type,
    price,
    bathrooms,
    bedrooms,
    toilets,
    images,
    status,
    map,
    postedBy,
  } = props.listing;

  // console.log(map);

  // const adds = `${map[0].city} %26 ${map[0].address} ${map[0].country} ${map[0].latitude} ${map[0].longitude}`;

  return (
    <>
      <Head>
        <title>{`${property_type} | ${address} | ${price}`}</title>
        <link rel="canonical" href={canonicalURL} />
        <meta
          name="description"
          content={`${property_type} | ${address} | ${price}`}
        />
        <meta
          name="keywords"
          content="Hapartment digital marketplace,Hapartment,renting a home,rent apartment or house, renting a property,for rent homes by owner,apartment list,housing listings,list house for rent,homes apartments for rent,rental listings,rental property listings,list apartment for rent,find apartments for rent,how to rent a house,finding homes for rent,how to rent out a house,housing homes for rent,list home for rent,pay my rent,how to get out of an apartment lease,how to rent out your house,renting out your house,my rentals,best place to list rental property,property management rental listings,rental listings by owner,find renters,rent my house,should i sell or rent my house,renting out a house,how to rent your house,new homes for rent,renting a house vs apartment,rent your home,places for rent by owner,find places to rent,out house rental,"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="title"
          content={`${property_type} | ${address} | ${price}`}
        />
        <meta
          property="og:title"
          content={`Hapartment - ${property_type} | ${address} | ${price}`}
        />
        <meta
          property="og:description"
          content={`https://hapartment.org/listings/${_id}`}
        />

        <meta property="og:image" content={images[0].url} />
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content={`https://hapartment.org/listings/${_id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="robots" content="index, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Hapartment Digital Marketplace" />

        <meta
          property="og:site_name"
          content="Hapartment Digital Marketplace"
        />
        <meta name="twitter:image:alt" content="Hapartment" />
        <meta charSet="utf-8"></meta>
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
                  <h1>{property_type}</h1>
                  <div className="address">
                    <i className="bi bi-geo-alt-fill"></i>
                    {address}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="price float-md-end float-sm-start">
                    ₦ {price}
                    <span> / annum</span>
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
                  {bathrooms} {bathrooms === "1" ? "Bathroom" : "Bathrooms"}
                </div>
                <div className="details-box">
                  <FaToilet className="details-icons" />
                  {toilets} {toilets === "1" ? "Toilet" : "Toilets"}
                </div>
              </div>

              {/* Verification status note */}
              {/* {status === "pending" ? (
                <div className="pending-status">
                  <i className="bi bi-exclamation-circle-fill"></i>
                  This property is under review for verification
                </div>
              ) : (
                <div className="verified-status">
                  <i className="bi bi-check-circle-fill"></i>
                  This property has been verified
                </div>
              )} */}

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
                          // <Map lat={map[0].latitude} lng={map[0].longitude} />
                          <div className="map-box" style={{ height: "400px" }}>
                            <iframe
                              src={`https://maps.google.com/maps?q= + ${map[0].latitude} , ${map[0].longitude} &t=&z=15&ie=UTF8&iwloc=&output=embed`}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
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
              <div className="agent-section mb-5">
                <div className="top-section">Posted By</div>

                <div className="bottom-section">
                  <div className="agent-center">
                    <div className="agent-image">
                      {postedBy.image === null ? (
                        <Image src={profileImg} alt="picture" />
                      ) : (
                        <Image
                          src={postedBy.image}
                          alt="picture"
                          width={100}
                          height={100}
                        />
                      )}
                    </div>

                    <div className="agent-content">
                      <h4>{postedBy.fullname}</h4>

                      <small>@{postedBy.username}</small>
                    </div>
                  </div>
                  <a
                    className="send-mail"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@hapartment.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-envelope-paper"></i>
                    {/* {postedBy.email} */}
                    support@hapartment.org
                  </a>

                  <ReactWhatsapp
                    className="btn"
                    number="+2347048942743"
                    message={`Hello, I'm interested in your property on Hapartment - https://hapartment.org/listings/${_id}`}
                  >
                    <i className="bi bi-whatsapp"></i>
                    07048942743
                  </ReactWhatsapp>
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

export async function getServerSideProps({ params, query }) {
  if (query.text) {
    return { redirect: { destination: "/listings", permanent: false } };
  }
  const response = await getDataApis("/all_listing");
  const listings = response.data.filter((item) => item._id === params.slug)[0];

  if (!listings) {
    return { notFound: true };
  }
  return { props: { listing: listings } };
}

// export async function getStaticPaths() {
//   const response = await getDataApis("/all_listing");
//   const thePaths = response.data.map((item) => {
//     return { params: { slug: item._id } };
//   });

//   return {
//     paths: thePaths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const response = await getDataApis("/all_listing");
//   const thelistings = response.data.filter(
//     (item) => item._id === context.params.slug
//   )[0];

//   return {
//     props: {
//       listing: thelistings,
//     },
//   };
// }
