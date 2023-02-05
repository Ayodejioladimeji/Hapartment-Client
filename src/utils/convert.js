import Geocode from "react-geocode";

export const convert = (address) => {
  Geocode.setApiKey("AIzaSyDXdO_qkMHQ6vLisaRq5vfXgK_n9YT5WBQ");
  // Get latitude & longitude from address.
  Geocode.fromAddress("Eiffel Tower").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
};
