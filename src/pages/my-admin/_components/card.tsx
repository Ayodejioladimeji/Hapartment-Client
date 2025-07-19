import { FaBath, FaToilet } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import { ACTIONS } from "@/store/Actions";
import { useContext, useState } from "react";
import { DataContext } from "@/store/GlobalState";
import { deleteDataApi } from "@/utils/fetchData";
import cogoToast from "cogo-toast";
import Loading from "@/common/loading";

const Card = ({ selectedListings, handleCheckboxChange, ...item }: any) => {
  const { state, dispatch } = useContext(DataContext);
  const [deleteLoading, setDeleteLoading] = useState(false);

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

  // Navigate to details page
  const sendData = () => {
    router.push(`/listings/${_id}`);
  };

  // Delete listing
  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setDeleteLoading(true);
    const res = await deleteDataApi(`/listing?id=${_id}`);
    if (res?.status === 200 || res?.status === 201) {
      dispatch({ type: ACTIONS.CALLBACK, payload: !state.callback });
      cogoToast.success(res?.data?.message);
    }
    setDeleteLoading(false);
  };

  // Stop routing when checkbox is clicked
  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    handleCheckboxChange(item._id);
  };

  return (
    <div className="card">
      <div className="card-image">
        <input
          type="checkbox"
          checked={selectedListings?.includes(item._id)}
          onChange={handleCheckboxClick}
          className="checkbox"
        />
        <Image
          src={image || "/images/image-placeholder.png"}
          alt="card-property"
          width={100}
          height={100}
          title="picture"
          unoptimized
          onClick={sendData}
        />

        <div
          className="tags d-flex align-items-center gap-2 cursor"
          style={{ background: "red" }}
          onClick={handleDelete}
        >
          Delete {deleteLoading && <Loading />}
        </div>
      </div>

      <div className="card-content" onClick={sendData}>
        <p>{title}</p>
        <h6 className="mb-3">₦{price?.toLocaleString()}</h6>
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
          Last updated : {moment(updatedAt).format("MMMM Do YYYY")}
        </small>
      </div>
    </div>
  );
};

export default Card;
