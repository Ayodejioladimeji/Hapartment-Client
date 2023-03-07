import { useState, useEffect, useContext } from "react";
import { getDataApis } from "@/utils/fetchData";
import { statesdata } from "@/constants/statesdata";
import propertyData from "@/constants/propertyData";
import furnishingdata from "@/constants/furnishingdata";
import { strictAddComma } from "comma-separator";
import { DataContext } from "@/store/GlobalState";
import { ACTIONS } from "@/store/Actions";

const initialState = {
  property_type: "",
  statename: "",
  cityname: "",
  bathrooms: "",
  toilets: "",
  furnishing: "",
};

const Modalsearch = () => {
  const { dispatch } = useContext(DataContext);
  const [values, setValues] = useState(initialState);
  const [city, setCity] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { property_type, statename, cityname, bathrooms, toilets, furnishing } =
    values;

  // handleChange method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // get the city method
  useEffect(() => {
    statesdata.filter((item) => {
      if (item.state === statename) {
        setCity(item.lgas);
      }
    });
  }, [statename]);

  // handlefilter method
  const handleFilter = async (e) => {
    e.preventDefault();
    const newData = {
      property_type,
      statename,
      cityname,
      bathrooms,
      toilets,
      furnishing,
      min_price: minPrice,
      max_price: maxPrice,
    };

    try {
      dispatch({ type: ACTIONS.LOADING, payload: true });
      dispatch({ type: ACTIONS.CHECKLOAD, payload: true });

      const res = await getDataApis(
        `/filter_listing?property_type=${property_type}&statename=${statename}&cityname=${cityname}&bathrooms=${bathrooms}&toilets=${toilets}&furnishing=${furnishing}&min_price=${newData.min_price}&max_price=${newData.max_price}`
      );

      dispatch({ type: ACTIONS.GET_LISTINGS, payload: res.data });
      dispatch({ type: ACTIONS.LOADING, payload: false });
      localStorage.setItem("filter", JSON.stringify(newData));
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTIONS.LOADING, payload: false });
    }
  };

  return (
    <div className="modalsearch">
      <div className="filter-box">
        <div className="box">
          <select
            onChange={handleChange}
            className="form-select "
            aria-label="Default select example"
            name="property_type"
            value={property_type}
          >
            <option defaultValue>Select property type</option>
            {propertyData.map((item) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              );
            })}
          </select>

          <select
            onChange={handleChange}
            className="form-select "
            aria-label="Default select example"
            name="bathrooms"
            value={bathrooms}
          >
            <option defaultValue>Choose bathroom</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>

          <select
            onChange={handleChange}
            className="form-select "
            aria-label="Default select example"
            name="toilets"
            value={toilets}
          >
            <option defaultValue>Choose toilet</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>

          <select
            onChange={handleChange}
            className="form-select "
            aria-label="Default select example"
            name="statename"
            value={statename}
          >
            <option defaultValue>Select state</option>
            {statesdata.map((item, index) => {
              return (
                <option key={index} value={item.state}>
                  {item.state}
                </option>
              );
            })}
          </select>

          <select
            onChange={handleChange}
            className="form-select "
            aria-label="Default select example"
            name="cityname"
            value={cityname}
          >
            <option defaultValue>Select city</option>
            {city?.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>

          <select
            onChange={handleChange}
            className="form-select "
            aria-label="Default select example"
            name="furnishing"
            value={furnishing}
          >
            <option defaultValue>Choose furnishing</option>
            {furnishingdata.map((item) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              );
            })}
          </select>

          <input
            type="text"
            onChange={(e) => setMinPrice(strictAddComma(e.target.value))}
            placeholder="min_price"
            value={minPrice}
          />

          <input
            type="text"
            onChange={(e) => setMaxPrice(strictAddComma(e.target.value))}
            placeholder="max_price"
            value={maxPrice}
          />

          <button
            onClick={handleFilter}
            className="btn search-button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Search
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalsearch;
