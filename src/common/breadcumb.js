import Image from "next/image";

const BreadCumb = ({ headingOne, headingTwo, subHeading, body, image }) => {
  return (
    <section className="white" style={{ background: "#F9FCF9" }}>
      <div className="container">
        <div className="row mt-5 bread">
          <div className="col-md-6">
            <div className="breadcumb">
              <h3 className="mb-3">{headingOne}</h3>
              {headingTwo !== "" && <h3 className="mb-3">{headingTwo}</h3>}

              {subHeading !== "" && <h6 className="mb-3">{subHeading}</h6>}

              <p className="mb-3">{body}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="breadcumb-image">
              <Image src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCumb;
