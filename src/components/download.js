import download from "../../public/download.svg";
import appstore from "../../public/appstore.svg";
import playstore from "../../public/playstore.svg";
import Image from "next/image";

const Download = () => {
  return (
    <section className="white download">
      <div className="container">
        <div className="row">
          <div className="col-md-6 download-left">
            <h3 className="mb-3">Download our mobile app</h3>

            <h6 className="mb-4">
              User friendly interface customized to meet your search needs
            </h6>

            <p className="mb-4">
              Helping users search for shops and apartment is not just our
              passion, it is our mission.
            </p>

            <div className="d-flex align-items-center justify-content-between">
              <Image src={appstore} alt="" className="appstore-image" />
              <Image src={playstore} alt="" className="playstore-image" />
            </div>
          </div>

          <div className="col-md-6 download-right">
            <Image src={download} alt="" className="download-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
