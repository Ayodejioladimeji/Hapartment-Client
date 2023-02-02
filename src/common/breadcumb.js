import Image from "next/image";

const BreadCumb = ({ headingOne, headingTwo, subHeading, body, image }) => {
  return (
    <section className="white">
      <div className="container">
        <div className="row breadcumb d-flex">
          <div className="col-md-6">
            <h3 className="mb-3">{headingOne}</h3>
            <h3 className="mb-3">{headingTwo}</h3>

            <h5 className="mb-3">{subHeading}</h5>

            <p className="mb-3">{body}</p>
          </div>

          <div className="col-md-6 breadcumb-image">
            <Image src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCumb;
