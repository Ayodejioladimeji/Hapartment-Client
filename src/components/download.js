import download from "../../public/images/download.svg";
import appstore from "../../public/images/appstore.svg";
import playstore from "../../public/images/playstore.svg";
import Image from "next/image";
import ModalWrapper from "@/common/contactModal";
import DownloadModal from "@/common/downloadmodal";
import { useContext } from "react";
import { DataContext } from "@/store/GlobalState";
import { ACTIONS } from "@/store/Actions";
import DownloadWrapper from "@/common/downloadWrapper";

const Download = () => {
  const { state, dispatch } = useContext(DataContext);
  const { downloadModal } = state;

  return (
    <section className="white download">
      <div className="container">
        <div className="row">
          <div className="col-md-6 download-left">
            <h3
              className="mb-3"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="400"
            >
              Download our mobile app
            </h3>

            <h6
              className="mb-4"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="600"
            >
              User friendly interface customized to meet your search needs
            </h6>

            <p
              className="mb-4"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="800"
            >
              Helping users search for shops and apartment is not just our
              passion, it is our mission.
            </p>

            <div
              className="d-flex align-items-center justify-content-between"
              onClick={() =>
                dispatch({ type: ACTIONS.DOWNLOAD_MODAL, payload: true })
              }
            >
              <Image
                src={appstore}
                alt=""
                className="appstore-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="1000"
              />
              <Image
                src={playstore}
                alt=""
                className="playstore-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="1200"
              />
            </div>
          </div>

          <div className="col-md-6 download-right">
            <div data-aos="fade-down" data-aos-once="true" data-aos-delay="800">
              <Image src={download} alt="" className="download-image" />
            </div>
          </div>
        </div>

        {downloadModal && (
          <DownloadWrapper>
            <DownloadModal />
          </DownloadWrapper>
        )}
      </div>
    </section>
  );
};

export default Download;
