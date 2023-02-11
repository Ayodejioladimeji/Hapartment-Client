import cardImage from "../../public/card-image1.svg";
import { FaBath, FaToilet } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";

//

const Card = ({ ...item }) => {
  const {
    _id,
    address,
    property_type,
    bathrooms,
    toilets,
    price,
    images,
    updatedAt,
  } = item;

  const router = useRouter();

  // const res1 = property_type?.replace(" ", "-");
  // const res2 = res1?.replace(" ", "-");
  // const res3 = res2?.replace(" ", "-");
  // const params_title = res3?.replace(" ", "-");

  return (
    <Link href={`/listings/${_id}`} className="card-link">
      <div className="card">
        <div className="card-image">
          <Image
            src={images[0].url}
            alt="card-picture"
            width="200"
            height="150"
          />
        </div>

        <div className="card-content">
          <p>{property_type}</p>
          <h6 className="mb-3">₦{price}</h6>
          <div className="address">
            <i className="bi bi-geo-alt"></i>
            <span>{address}</span>
          </div>

          <div className="card-box">
            <div className="bath">
              <div className="bath-box">
                <FaBath className="bi" />
              </div>
              <span>{bathrooms} bathrooms</span>
            </div>
            <div className="bath">
              <div className="bath-box">
                <FaToilet className="bi" />
              </div>
              <span>{toilets} toilets</span>
            </div>
          </div>
        </div>

        <div className="card-footer mt-4">
          <small>
            Last updated : {moment(updatedAt).format("MMMM Do YYYY")}{" "}
          </small>
        </div>
      </div>
    </Link>
  );
};
export default Card;
