import moment from "moment";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterIcon,
} from "next-share";
import { useRouter } from "next/router";

const Description = ({ item, children }) => {
  const router = useRouter();

  return (
    <div className="description">
      <div className="description-box">
        <h6>Property Location</h6>
        <p>Country : {item.country}</p>
        <p>State : {item.statename}</p>
        <p>city : {item.cityname}</p>
      </div>

      <div className="description-box">
        <h6>Description</h6>
        <p>{item.description}</p>
      </div>

      <div className="description-box">
        <h6>Home Facilities</h6>

        <div className="facilities mb-4 mt-3">
          {item.home_facilities.map((item, index) => {
            return (
              <div key={index} className="facilities-box">
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <div className="description-box">
        <h6>Area Facilities</h6>

        <div className="facilities mb-4 mt-3">
          {item.area_facilities.map((item, index) => {
            return (
              <div key={index} className="facilities-box">
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <div className="description-box">
        <h6>Furnishing</h6>

        <p>
          Property is <span className="coloured">{item.furnishing}</span>
        </p>
      </div>

      <div className="description-box">
        <h6>Property Updated</h6>

        <p>{moment(item.updatedAt).format("MMMM Do YYYY")}</p>
      </div>

      <div className="description-box">
        <h6>Share Property</h6>

        <div className="share-box">
          <div>
            <FacebookShareButton
              url={`https://hapartment-client.vercel.app/listings/${router.query.slug}`}
              quote={`${item.property_type} - ${item.description} - Price : ${item.price}`}
              hashtag={"#hapartment"}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>

          <div className="mx-3">
            <WhatsappShareButton
              url={`https://hapartment-client.vercel.app/listings/${router.query.slug}`}
              title={`${item.property_type} - ${item.description} - Price : ${item.price}`}
              separator=":: "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <div>
            <TwitterShareButton
              url={`https://hapartment-client.vercel.app/listings/${router.query.slug}`}
              title={`${item.property_type} - ${item.description} - Price : ${item.price}`}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
