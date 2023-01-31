import download from "../../public/download.svg";
import appstore from "../../public/appstore.svg";
import playstore from "../../public/playstore.svg";
import Image from "next/image";

const Download = () => {
  return (
    <div className="download">
      <div className="container-fluid">
        <div className="row">
          <section className="col-md-6 download-left">
            <h3 class="mb-3">Download our mobile app</h3>

            <h6 className="mb-4">
              User friendly interface customized to meet your search needs
            </h6>

            <p class="mb-4">
              Helping users search for shops and apartment is not just our
              passion, it is our mission.
            </p>

            <div class="d-flex align-items-center justify-content-between">
              <Image src={appstore} alt="" class="appstore-image" />
              <Image src={playstore} alt="" class="playstore-image" />
            </div>
          </section>

          <div className="col-md-6 download-right bg-success">
            <Image src={download} alt="" class="download-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
