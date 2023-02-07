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
// export const sortValue = (listings, sorting) => {
//   /* eslint-disable */
//   return listings.sort((a, b) => {
//     if (sorting === "1") {
//       return listings;
//     } else if (sorting === "2") {
//       return strictRemoveComma(a.price) > strictRemoveComma(b.price) ? 1 : -1;
//     } else if (sorting === "3") {
//       return strictRemoveComma(b.price) > strictRemoveComma(a.price) ? 1 : -1;
//     }
//   });
// };

export const sortValue = (listings, sorting) => {
  /* eslint-disable */
  return listings.sort((a, b) => {
    if (sorting === "1") {
      return strictRemoveComma(a.price) > strictRemoveComma(b.price) ? 1 : -1;
    } else if (sorting === "2") {
      return strictRemoveComma(b.price) > strictRemoveComma(a.price) ? 1 : -1;
    }
  });
};

export const filterValue = (listings, sort) => {
  return listings.filter((item) => {
    if (sort === "1") {
      return item.property_type === "Single Room";
    } else if (sort === "2") {
      return item.property_type === "Room & Parlour";
    } else if (sort === "3") {
      return item.property_type === "Room & Parlour Self Contain";
    } else if (sort === "4") {
      return item.property_type === "Self Contain";
    } else if (sort === "5") {
      return item.property_type === "2 Bedroom Flat";
    } else if (sort === "6") {
      return item.property_type === "3 Bedroom Flat";
    } else if (sort === "7") {
      return item.property_type === "4 Bedroom Flat";
    } else if (sort === "8") {
      return item.property_type === "5+ Bedroom Flat";
    } else if (sort === "9") {
      return item.property_type === "Duplex";
    }
    return item;
  });
};
