import Card from "@/common/card";
import Placeholder from "@/common/placeholder";
import { listingdata } from "@/lib/listingdata";
import { DataContext } from "@/store/GlobalState";
import { useContext, useEffect, useState } from "react";

//

const Discover = () => {
  const { state } = useContext(DataContext);
  const { listings, loading } = state;

  return (
    <section className="lighter ">
      <div className="container">
        <div className="discover">
          <h3>Discover some of our top apartments</h3>

          <div className="discover-box">
            {loading ? (
              <Placeholder />
            ) : (
              listings.map(
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

// export function getStaticProps() {
//   const listing = listingdata;

//   return {
//     props: {
//       listing: listing,
//     },
//   };
// }
