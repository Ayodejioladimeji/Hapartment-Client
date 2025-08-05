import Card from "@/common/card";
import Placeholder from "@/common/placeholder";
import { DataContext } from "@/store/GlobalState";
import { useContext } from "react";

//

const Discover = () => {
  const { state } = useContext(DataContext);
  const { allListings, loading } = state;

  return (
    <section className="lighter ">
      <div className="container">
        <div className="discover">
          <h3 data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
            Discover some of our top apartments
          </h3>

          <div
            className="discover-box"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
          >
            {loading ? (
              <Placeholder />
            ) : (
              allListings.map(
                (item, index) => index <= 7 && <Card {...item} key={item._id} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
