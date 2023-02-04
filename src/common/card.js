import cardImage from "../../public/card-image1.svg";
import { FaBath, FaToilet } from "react-icons/fa";
import Image from "next/image";

//

const Card = ({ ...item }) => {
  const {
    image,
    title,
    price,
    address,
    bathrooms,
    toilets,
    description,
    time,
  } = item;
  return (
    <div className="card">
      <div className="card-image">
        <Image src={image} alt="card-picture" width="200" height="150" />
      </div>

      <div className="card-content">
        <p>{title}</p>
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
        <small>Last updated : {time} </small>
      </div>
    </div>
  );
};
export default Card;
