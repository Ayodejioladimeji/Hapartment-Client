import moment from "moment";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterIcon,
} from "next-share";

const Description = ({ item, children }) => {
  const shareUrl = "https://google.com";
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

        <div>
          <FacebookShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <WhatsappShareButton
            url={"https://github.com/next-share"}
            title={
              "next-share is a social share buttons for your next React apps."
            }
            separator=":: "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <TwitterShareButton
            url={"https://github.com/next-share"}
            title={
              "next-share is a social share buttons for your next React apps."
            }
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default Description;
