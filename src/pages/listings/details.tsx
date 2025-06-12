import Image from "next/image";
import profileImg from "../../../public/images/profile-img.svg";
import banner1 from "../../../public/images/banner1.jpeg";
import banner2 from "../../../public/images/banner2.jpeg";
import banner3 from "../../../public/images/banner3.jpeg";
import banner4 from "../../../public/images/banner4.jpeg";
import banner5 from "../../../public/images/banner5.jpeg";
import Description from "../../components/description";
import { FaToilet } from "react-icons/fa";
import { useRouter } from "next/router";
import Slider from "@/common/Slider";
import { Modal } from "react-bootstrap";
import AdvertiseModal from "@/common/advertiseModal";
import { useState, useMemo } from "react";
import ReactWhatsapp from "react-whatsapp";
import Head from "next/head";

const ListingDetails = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  // Construct listing data from query
  const listing = useMemo(() => {
    const query = router.query;

    const {
      _id,
      address,
      title,
      price,
      image,
      toilets,
      bedrooms,
      bathrooms,
      agentName,
      agentPhones,
      agentAddress,
      description,
    } = query;

    let images: { url: string }[] = [];

    const imageArray = JSON?.parse(query.images as string);
    if (Array.isArray(imageArray)) {
      images = imageArray.map((img) => ({ url: img }));
    }

    return {
      _id,
      address,
      title,
      price,
      bathrooms,
      bedrooms,
      toilets,
      image,
      images,
      agentName,
      description,
      agentPhones,
      agentAddress,
    };
  }, [router.query]);

  const {
    address,
    title,
    price,
    toilets,
    images,
    image,
    agentName,
    agentPhones,
    description,
  } = listing;

  const buttonProps: any = {
    number: agentPhones,
    message: `Hello, I'm interested in your property on Hapartment - ${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/listings/${listing}`,
  };

  const canonicalURL = `${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/${title}`.split(
    "?"
  )[0];

  return (
    <>
      <Head>
        <title>{`${title} | ${address} | ${price}`}</title>
        <link rel="canonical" href={canonicalURL} />
        <meta name="description" content={`${title} | ${address} | ${price}`} />
        <meta
          name="keywords"
          content="Hapartment digital marketplace,...more keywords"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={`${title} | ${address} | ${price}`} />
        <meta
          property="og:title"
          content={`Hapartment - ${title} | ${address} | ${price}`}
        />
        <meta property="og:description" content={description as string} />
        <meta property="og:image" content={image as string} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.hapartment.org/listings/${title}`}
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
        <meta charSet="utf-8" />
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
                  <h1>{title}</h1>
                  <div className="address">
                    <i className="bi bi-geo-alt-fill"></i>
                    {address}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="price float-md-end float-sm-start">
                    ₦ {price.toLocaleString()}
                    <span> / annum</span>
                  </div>
                </div>
              </div>

              <div className="carousel-container my-4">
                <Slider images={images} />
              </div>

              <div className="details">
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
                    </ul>
                  </div>

                  <div className="tab-content">
                    <div className="tab-pane active" id="description">
                      <div className="package-box mt-4 px-4 py-3">
                        <Description item={listing} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="disclaimer my-5">
                <h6>Disclaimer</h6>
                <p>
                  Hapartment Digital Marketplace makes no warranty as to the
                  accuracy or completeness of the advertisement or any linked or
                  associated information...
                </p>
              </div>
            </div>

            <div className="col-lg-3 mt-5">
              <div className="agent-section mb-5">
                <div className="top-section">Posted By</div>
                <div className="bottom-section">
                  <div className="agent-center">
                    <div className="agent-image">
                      <Image
                        src="/images/userimage.jpg"
                        alt="agent image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="agent-content">
                      <h4>{agentName}</h4>
                      <ReactWhatsapp className="btn" {...buttonProps}>
                        <i className="bi bi-whatsapp"></i>
                        {agentPhones}
                      </ReactWhatsapp>
                    </div>
                  </div>
                </div>
              </div>

              <div className="advert-image-box mb-5">
                <Image src={banner1} alt="ad" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner5} alt="ad" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner2} alt="ad" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner3} alt="ad" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner4} alt="ad" priority={true} />
              </div>

              <div className="adverts-box mb-3">
                Place your Banner Adverts here
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={openModal} dialogClassName="advertise-modal">
        <AdvertiseModal setOpenModal={setOpenModal} />
      </Modal>
    </>
  );
};

export default ListingDetails;
