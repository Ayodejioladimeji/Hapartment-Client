import moment from "moment";

const Description = ({ item }) => {
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
    </div>
  );
};

export default Description;
