import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Placeholder from "@/common/placeholder";
import { filterValue, sortValue } from "@/utils/utils";
import { getDataApis } from "@/utils/fetchData";
import { statesdata } from "@/constants/statesdata";
import propertyData from "@/constants/propertyData";
import furnishingdata from "@/constants/furnishingdata";
import { strictAddComma } from "comma-separator";

const initialState = {
  property_type: "",
  statename: "",
  cityname: "",
  bathrooms: "",
  toilets: "",
  furnishing: "",
};

const Modalsearch = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(9);
  const [sorting, setSorting] = useState("");
  const [sort, setSort] = useState("");
  const [localData, setLocalData] = useState(null);
  const [values, setValues] = useState(initialState);
  const [city, setCity] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const router = useRouter();
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

  // Sorting the data
  const sortdata = filterValue(listings, sort);
  const sorted = sortValue(sortdata, sorting);

  useEffect(() => {
    // get data from the localstorage
    const data = sessionStorage.getItem("filter");
    const parsedData = JSON.parse(data);
    setLocalData(parsedData);
    if (parsedData !== null) {
      setValues(parsedData);
    }
  }, []);

  // useEffect
  useEffect(() => {
    if (localData !== null) {
      // destructure data from localData
      const {
        property_type,
        statename,
        cityname,
        bathrooms,
        toilets,
        furnishing,
        min_price,
        max_price,
      } = localData;

      const getListing = async () => {
        try {
          const res = await getDataApis(
            `/filter_listing?property_type=${property_type}&statename=${statename}&cityname=${cityname}&bathrooms=${bathrooms}&toilets=${toilets}&furnishing=${furnishing}&min_price=${min_price}&max_price=${max_price}`
          );

          setListings(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      getListing();
    }
    setLoading(false);
  }, [localData]);

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
      setLoading(true);

      const res = await getDataApis(
        `/filter_listing?property_type=${property_type}&statename=${statename}&cityname=${cityname}&bathrooms=${bathrooms}&toilets=${toilets}&furnishing=${furnishing}`
      );

      setListings(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    sessionStorage.setItem("filter", JSON.stringify(newData));
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
            className="form-control input"
          />

          <input
            type="text"
            onChange={(e) => setMaxPrice(strictAddComma(e.target.value))}
            placeholder="max_price"
            value={maxPrice}
            className="form-control input"
          />

          <button className="btn search-button">
            Search
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalsearch;
