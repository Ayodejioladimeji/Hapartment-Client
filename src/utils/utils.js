import { strictRemoveComma } from "comma-separator";

export const getDate = (date) => {
  var dateobj = new Date(date);
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
  var result =
    pad(dateobj.getDate()) +
    "/" +
    pad(dateobj.getMonth() + 1) +
    "/" +
    dateobj.getFullYear();
  return result;
};

// Sort Highest price to Lowest price
export const sortValue = (listings, sorting) => {
  /* eslint-disable */
  return listings.sort((a, b) => {
    if (sorting === "1") {
      return a;
    } else if (sorting === "2") {
      return strictRemoveComma(a.price) > strictRemoveComma(b.price) ? 1 : -1;
    } else if (sorting === "3") {
      return strictRemoveComma(b.price) > strictRemoveComma(a.price) ? 1 : -1;
    }
  });
};
