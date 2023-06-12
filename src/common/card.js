import { FaBath, FaToilet } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import { ACTIONS } from "@/store/Actions";
import { useContext } from "react";
import { DataContext } from "@/store/GlobalState";
import * as gtag from "../lib/gtag";

//

const Card = ({ ...item }) => {
  const { dispatch } = useContext(DataContext);
  const {
    _id,
    address,
    property_type,
    bathrooms,
    toilets,
    price,
    images,
    status,
    updatedAt,
  } = item;

  const router = useRouter();

  // const res1 = property_type?.replace(" ", "-");
  // const res2 = res1?.replace(" ", "-");
  // const res3 = res2?.replace(" ", "-");
  // const params_title = res3?.replace(" ", "-");

  // send data to the details page
  const sendData = () => {
    router.push({
      pathname: `/listings/${_id}`,
      query: item,
    });

    gtag.event({
      action: "listing_card",
      category: "card",
      label: property_type,
    });

    dispatch({ type: ACTIONS.CHECKLOAD, payload: false });
  };

  return (
    // <Link href={`/listings/${params_title}`}>
    <div className="card" onClick={sendData}>
      <div className="card-image">
        <img
          src={images[0].url}
          alt="card-property"
          width={100}
          height={100}
          title="picture"
        />

        <div
          className="tags"
          style={{
            background: `${
              status === "pending"
                ? "orange"
                : status === "declined"
                ? "red"
                : "green"
            }`,
          }}
        >
          {status}
        </div>
      </div>

      <div className="card-content">
        <p>
          {property_type === "room parlour"
            ? "room & parlour"
            : property_type === "room parlour self contain"
            ? "room & parlour self contain"
            : property_type}
        </p>
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
    // </Link>
  );
};
export default Card;
