"use client"

import { FaBath, FaToilet } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import { ACTIONS } from "@/store/Actions";
import { useContext } from "react";
import { DataContext } from "@/store/GlobalState";
import Description from "./../components/description";

//

const Card = ({ ...item }) => {
  const { dispatch } = useContext(DataContext);
  const {
    _id,
    toilets,
    bathrooms,
    price,
    title,
    image,
    location,
    Images,
    agentName,
    agentPhones,
    description,
    updatedAt,
  } = item;

  const router = useRouter();

  const params = {
    address: location,
    title,
    price,
    toilets,
    bathrooms,
    images: JSON.stringify(Images),
    agentName,
    agentPhones,
    description,
    image,
  };

  // send data to the details page
  const sendData = () => {
    router.push(`/listings/${_id}`);
  };

  return (
    <div className="card" onClick={sendData}>
      <div className="card-image">
        <Image
          src={image || "/images/image-placeholder.png"}
          alt="card-property"
          width={100}
          height={100}
          title="picture"
          unoptimized
        />

        <div
          className="tags"
          style={{
            background: "green",
          }}
        >
          Approved
        </div>
      </div>

      <div className="card-content">
        <p>{title}</p>
        <h6 className="mb-3">₦{price.toLocaleString()}</h6>
        <div className="address">
          <i className="bi bi-geo-alt"></i>
          <span>{location}</span>
        </div>

        <div className="card-box">
          {bathrooms && (
            <div className="bath">
              <div className="bath-box">
                <FaBath className="bi" />
              </div>
              <span>
                {bathrooms} {bathrooms > 1 ? "Bathrooms" : "Bathroom"}
              </span>
            </div>
          )}

          {toilets && (
            <div className="bath">
              <div className="bath-box">
                <FaToilet className="bi" />
              </div>

              <span>
                {toilets} {toilets > 1 ? "Toilets" : "Toilet"}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="card-footer mt-4">
        <small>
          Last updated : {moment(updatedAt).format("MMMM Do YYYY")}{" "}
        </small>
      </div>
    </div>
  );
};
export default Card;
