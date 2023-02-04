import { useRouter } from "next/router";

const Modalsearch = () => {
  const router = useRouter();

  return (
    <div className="modalsearch">
      <div className="box">
        <select className="form-select " aria-label="Default select example">
          <option defaultValue>Select property type</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="form-select " aria-label="Default select example">
          <option defaultValue>Choose bathroom</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="form-select " aria-label="Default select example">
          <option defaultValue>Choose toilet</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="form-select " aria-label="Default select example">
          <option defaultValue>Select state</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="form-select " aria-label="Default select example">
          <option defaultValue>Select city</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="form-select " aria-label="Default select example">
          <option defaultValue>Choose furnishing</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="form-select " aria-label="Default select example">
          <option defaultValue>Min price / annum</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="form-select " aria-label="Default select example">
          <option defaultValue>Max price / annum</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <button
          className="btn search-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => router.push("/listings")}
        >
          Search
          <i className="bi bi-arrow-right-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Modalsearch;
