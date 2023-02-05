import Image from "next/image";
import banner1 from "../../../public/banner1.jpeg";
import banner2 from "../../../public/banner2.jpeg";
import banner3 from "../../../public/banner3.jpeg";
import banner4 from "../../../public/banner4.jpeg";
import banner5 from "../../../public/banner5.jpeg";
import Description from "./../../components/description";
import { FaBath, FaBed, FaToilet } from "react-icons/fa";

const ListingDetails = () => {
  return (
    <section className="white">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-5">
            <div className="back mb-4">
              <button className="back-button">
                <i className="bi bi-chevron-left"></i> Go back
              </button>
            </div>

            <div className="row">
              <div className="col-md-8">
                <h3>2 Bedroom flat</h3>
                <div className="address">
                  <i class="bi bi-geo-alt-fill"></i>
                  22 Kofo Abayomi street, Ikeja, Lagos
                </div>
              </div>

              <div className="col-md-4">
                <div className="price float-md-end float-sm-start">
                  ₦ 500,000
                </div>
              </div>
            </div>

            <div className="carousel my-4"></div>

            <div className="details">
              <div className="details-box">
                <FaBed className="details-icons" />2 Bedrooms
              </div>
              <div className="details-box">
                <FaBath className="details-icons" />2 Bathrooms
              </div>
              <div className="details-box">
                <FaToilet className="details-icons" />2 Toilets
              </div>
            </div>

            <div className="details-tab mt-5">
              <div class="tab-section">
                <div class="deliver-box">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-bs-toggle="tab"
                        href="#description"
                      >
                        Description
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#map">
                        View map
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="tab-content">
                  <div class="tab-pane active" id="description">
                    <div class="package-box mt-4 px-4 py-3">
                      <Description />
                    </div>
                  </div>

                  <div class="tab-pane" id="map">
                    <div class="package-box mt-4 px-4 py-3">map</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="disclaimer my-5">
              <h6>Disclaimer</h6>
              <p>
                Hapartment Digital Marketplace makes no warranty as to the
                accuracy or completeneness of the advertisement or any linked or
                associated information on the information displayed about this
                property, and Hapartment Digital Marketplace has no control over
                the content.
              </p>
              <p>
                Hapartment Digital Marketplace shall not in any way be held
                liable for the actions of any agent or landlord on or off this
                website.
              </p>
            </div>
          </div>

          <div className="col-lg-3 mt-5">
            <div className="advert-image-box mb-5">
              <Image src={banner1} alt="" />
            </div>
            <div className="advert-image-box mb-5">
              <Image src={banner5} alt="" />
            </div>
            <div className="advert-image-box mb-5">
              <Image src={banner2} alt="" />
            </div>
            <div className="advert-image-box mb-5">
              <Image src={banner3} alt="" />
            </div>
            <div className="advert-image-box mb-5">
              <Image src={banner4} alt="" />
            </div>

            <div className="adverts-box mb-3">
              Place your Banner Adverts here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDetails;
