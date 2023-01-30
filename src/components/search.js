import Image from "next/image";
import Link from "next/link";
import searchImg from "../../public/search-image.svg";

const Search = () => {
  return (
    <section className="white main-search">
      <div className="container">
        <div className="row search">
          <div className="col-md-6 search-left">
            <h3 className="mb-4">Search for available apartments</h3>

            <div className="search-box">
              <div className="box">
                <select
                  class="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Select property type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select
                  class="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Choose bathroom</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select
                  class="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Choose toilet</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select
                  class="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Select state</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select
                  class="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Select city</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select
                  class="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Choose furnishing</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select
                  class="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Min price / annum</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select
                  class="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Max price / annum</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <button className="btn">
                  Search
                  <i class="bi bi-arrow-right-circle"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 search-right">
            <Image src={searchImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
