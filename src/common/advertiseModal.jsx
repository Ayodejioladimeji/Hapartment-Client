import { postDataApi } from "@/utils/fetchData";
import cogoToast from "cogo-toast";
import Image from "next/image";
import React, { useState } from "react";
import Loading from "./loading";
const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

const initialState = {
  fullname: "",
  email: "",
  website: "",
  pricing: "",
  image: null,
};

const AdvertiseModal = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (file?.size > 2048 * 2048) {
      cogoToast.error("File too large");
      return;
    }

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      cogoToast.error("Image format not acceptable");
      return;
    }

    setLoading(true);

    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hapartment");
    formData.append("cloud_name", "hapartment");

    const my_image = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });

    const image = await my_image.json();

    const uploadImage = {
      id: image.public_id,
      url: image.url,
    };

    setValues((prevState) => ({
      ...prevState,
      image: uploadImage,
    }));
    setLoading(false);
  };

  // remove Image
  const removeImage = async () => {
    const newData = {
      public_id: values?.image?.id,
    };

    try {
      setLoading(true);
      const res = await postDataApi("/destroy", newData);
      // console.log(res.data.msg);
      setLoading(false);
      setValues((prevState) => ({
        ...prevState,
        image: null,
      }));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const newData = {
      fullname: values.fullname,
      email: values.email,
      website: values.website,
      pricing: values.pricing,
      image: values.image,
    };

    try {
      console.log(newData);
      setLoading(false);
    } catch (error) {
      cogoToast.error(error.response.message);
      setLoading(false);
    }
  };

  //
  return (
    <div className="advertise">
      <h1>Please provide your product information</h1>

      <form className="form-div" onSubmit={handleSubmit}>
        <div className="form-box">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            value={values.fullname}
            name="fullname"
            onChange={handleChange}
          />
        </div>

        <div className="form-box">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="form-box">
          <label htmlFor="website">Website (Optional)</label>
          <input
            type="text"
            placeholder="www.mywebsite.com"
            value={values.website}
            name="website"
            onChange={handleChange}
          />
        </div>

        <div className="form-box">
          <label htmlFor="website">Pricing plan</label>

          <select
            onChange={handleChange}
            className="form-select "
            aria-label="Default select example"
            name="pricing"
            value={values.pricing}
          >
            <option defaultValue>Choose pricing</option>
            <option value="1">1 month (2,000)</option>
            <option value="6">6 months (#10,800)</option>
            <option value="12">12 months (#21,600)</option>
          </select>
        </div>

        <div className="form-box">
          <label htmlFor="website">Upload banner</label>

          <div className="profile-image">
            {values.image === null && (
              <span>
                {loading ? "Uploading..." : <i className="bi bi-camera"></i>}

                <input
                  autoComplete="off"
                  type="file"
                  id="Image"
                  className="file-up"
                  accept="image/*"
                  onChange={handleUpload}
                />
              </span>
            )}

            {values.image !== null && (
              <>
                <img src={values.image.url} alt="banner-image" />

                <div className="trash" onClick={removeImage}>
                  {loading ? (
                    <Loading
                      height="20"
                      width="20"
                      primaryColor="red"
                      secondaryColor="red"
                    />
                  ) : (
                    <i className="bi bi-trash3"></i>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AdvertiseModal;
