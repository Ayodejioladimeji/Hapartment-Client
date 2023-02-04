import Card from "@/common/card";
import { listingdata } from "@/lib/listingdata";
import { useEffect, useState } from "react";

//

const Discover = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(listingdata);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading....</p>;
  if (!data) return <p>No data found</p>;

  return (
    <section className="lighter ">
      <div className="container">
        <div className="discover">
          <h3>Discover some of our top apartments</h3>

          <div className="discover-box">
            {data.map((item) => (
              <Card {...item} key={item.id} />
            ))}
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
