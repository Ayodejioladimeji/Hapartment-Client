"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaToilet } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp"
import Slider from "@/common/Slider";
import Description from "@/components/description";
import AdvertiseModal from "@/common/advertiseModal";
import banner1 from "@/../public/images/banner1.jpeg";
import banner2 from "@/../public/images/banner2.jpeg";
import banner3 from "@/../public/images/banner3.jpeg";
import banner4 from "@/../public/images/banner4.jpeg";
import banner5 from "@/../public/images/banner5.jpeg";
import MapBox from "@/components/mapbox";
import MetaTags from "@/components/meta-tags";
import { Modal } from "react-bootstrap";
import Image from "next/image";

const ListingDetailsClient = ({ listing }: any) => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);

    const {
        _id,
        location,
        title,
        price,
        toilets,
        bathrooms,
        Images: images,
        image,
        agentName,
        agentPhones,
        description,
    } = listing?.listing;

    const buttonProps: any = {
        number: agentPhones?.[0],
        message: `Hello, I'm interested in your property on Hapartment - ${process.env.NEXT_PUBLIC_CLIENT_URL}/listings/${_id}`,
    };

    const canonicalURL = `${process.env.NEXT_PUBLIC_CLIENT_URL}/listings/${listing._id}`;

    return (
        <>
            <MetaTags
                title={`${title} | ${location} | ${price}`}
                description={description as string}
                image={image as string}
                canonicalUrl={canonicalURL}
            />

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
                                        {location}
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="price float-md-end float-sm-start">
                                        ₦ {price?.toLocaleString()}
                                        <span> / annum</span>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-container my-4">
                                <Slider images={images} />
                            </div>

                            <div className="details">
                                {toilets && (
                                    <div className="details-box">
                                        <FaToilet className="details-icons" />
                                        {toilets} {toilets > 1 ? "Toilets" : "Toilet"}
                                    </div>
                                )}

                                {bathrooms && (
                                    <div className="details-box">
                                        <FaToilet className="details-icons" />
                                        {bathrooms} {bathrooms > 1 ? "Bathrooms" : "Bathroom"}
                                    </div>
                                )}
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

                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#map">
                                                    Map
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-content">
                                        <div className="tab-pane active" id="description">
                                            <div className="package-box mt-4 px-4 py-3">
                                                <Description item={listing?.listing} />
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="map">
                                            <div className="package-box mt-4 px-4 py-3">
                                                <MapBox address={location} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="disclaimer my-5">
                                <h6>Disclaimer</h6>
                                <p>
                                    Hapartment Digital Marketplace makes no warranty as to the
                                    accuracy or completeness of the advertisement...
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
                                            <h4 className="mb-0">{agentName}</h4>
                                            <p>{agentPhones[0]}</p>
                                            {/* {agentPhones?.[0] && (
                                                <ReactWhatsapp className="btn" {...buttonProps}>
                                                    <i className="bi bi-whatsapp"></i>
                                                    {agentPhones[0]}
                                                </ReactWhatsapp>
                                            )} */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {[banner1, banner5, banner2, banner3, banner4].map(
                                (banner, idx) => (
                                    <div className="advert-image-box mb-5" key={idx}>
                                        <Image src={banner} alt="ad" priority={idx === 4} />
                                    </div>
                                )
                            )}

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

export default ListingDetailsClient;
