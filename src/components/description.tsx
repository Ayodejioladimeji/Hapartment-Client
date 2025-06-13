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

const Description = ({ item }) => {
  const router = useRouter();

  return (
    <div className="description">
      <div className="description-box">
        <h6>Property Location</h6>
        <p>Location : {item.location}</p>
      </div>

      <div className="description-box">
        <h6>Description</h6>
        <p>{item.description}</p>
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
              url={`https://www.hapartment.org/listings/${router.query.slug}`}
              quote={`${item.property_type} - ${item.description} - Price : ${item.price}`}
              hashtag={"#hapartment"}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>

          <div className="mx-3">
            <WhatsappShareButton
              url={`https://www.hapartment.org/listings/${router.query.slug}`}
              title="Hi, you may be interested in this property on Hapartment"
              separator="-"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <div>
            <TwitterShareButton
              url={`https://www.hapartment.org/listings/${router.query.slug}`}
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
