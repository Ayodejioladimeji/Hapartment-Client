import { useState, useEffect } from "react";
import Card from "@/common/card";
import { listingdata } from "@/lib/listingdata";
import Image from "next/image";
import banner1 from "../../public/banner1.jpeg";
import banner2 from "../../public/banner2.jpeg";
import banner3 from "../../public/banner3.jpeg";
import banner4 from "../../public/banner4.jpeg";
import banner5 from "../../public/banner5.jpeg";
import LoadMore from "@/common/loadmore";

//

const SearchListing = () => {
  const [data, setData] = useState(listingdata);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(9);

  return (
    <>
      <section className="white  search-listing mt-5">
        <div className="container">
          <div className="search-box">
            <h4>
              Properties for rent in <span>Nigeria</span>
            </h4>
            <button className="btn mb-4 filteroptions">Filter Options</button>

            <div className="box">
              <select class="form-select " aria-label="Default select example">
                <option defaultValue>Select property type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select class="form-select " aria-label="Default select example">
                <option defaultValue>Choose bathroom</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select class="form-select " aria-label="Default select example">
                <option defaultValue>Choose toilet</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select class="form-select " aria-label="Default select example">
                <option defaultValue>Select state</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select class="form-select " aria-label="Default select example">
                <option defaultValue>Select city</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select class="form-select " aria-label="Default select example">
                <option defaultValue>Choose furnishing</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select class="form-select " aria-label="Default select example">
                <option defaultValue>Min price / annum</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select class="form-select " aria-label="Default select example">
                <option defaultValue>Max price / annum</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <button className="btn search-button">
                Search
                <i class="bi bi-arrow-right-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <div className="filter mb-5 d-flex align-items-center justify-content-between">
            <div>Results 50 of 100</div>
            <div className="filtering">
              <select class="form-select " aria-label="Default select example">
                <option defaultValue>Default</option>
                <option value="2">Most Recent</option>
                <option value="3">Highest Price</option>
                <option value="3">Lowest Price</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-9">
              <div className="list-box">
                {data.slice(0, visible).map((item) => (
                  <Card {...item} key={item.id} />
                ))}
              </div>

              <LoadMore
                loading={loading}
                setLoading={setLoading}
                setVisible={setVisible}
              />
            </div>

            <div className="col-lg-3">
              <div className="advert-image-box mb-5">
                <Image src={banner1} alt="" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner5} alt="" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner2} alt="" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner3} alt="" />
              </div>
              <div className="advert-image-box mb-5">
                <Image src={banner4} alt="" />
              </div>

              <div className="adverts-box mb-3">
                Place your Banner Adverts here
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchListing;
