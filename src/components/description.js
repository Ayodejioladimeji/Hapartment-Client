const Description = () => {
  return (
    <div className="description">
      <div className="description-box">
        <h6>Property Location</h6>
        <p>Country : Ng</p>
        <p>State : Lagos</p>
        <p>city : Ikeja</p>
      </div>

      <div className="description-box">
        <h6>Description</h6>
        <p>
          {`It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).`}
        </p>
      </div>

      <div className="description-box">
        <h6>Home Facilities</h6>

        <div className="facilities mb-4 mt-3">
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
        </div>
      </div>

      <div className="description-box">
        <h6>Area Facilities</h6>

        <div className="facilities mb-4 mt-3">
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
          <div className="facilities-box">Tiled floor</div>
        </div>
      </div>

      <div className="description-box">
        <h6>Furnishing</h6>

        <p>
          Property is <span className="coloured">Furnished</span>
        </p>
      </div>

      <div className="description-box">
        <h6>Property Updated</h6>

        <p>1 week ago</p>
      </div>
    </div>
  );
};

export default Description;
