import React, { useContext, useEffect, useState } from "react";
import classnames from "classnames";
import { UsePagination, DOTS } from "./Usepagination";
import { useRouter } from "next/navigation"; // Keep this for router.route if you still want it, but less critical now
import { screenPixels } from "@/utils/screenpx";
import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";

const Paginate = (props) => {
  const {
    onPageChange, // This is the key prop!
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;
  const [device, setDevice] = useState(false);
  const router = useRouter(); // Still useful to get current path if needed, but not for direct query manipulation
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    screenPixels("375px", setDevice);
  }, []);

  const paginationRange = UsePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // Ensure paginationRange is valid before proceeding
  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    dispatch({ type: ACTIONS.LOADING, payload: true });
    // Call the parent's onPageChange, which handles updating the URL with all params
    onPageChange(currentPage + 1);
    // REMOVED: router.push(`${router.route}?page=${currentPage + 1}`);
  };

  const onPrevious = () => {
    dispatch({ type: ACTIONS.LOADING, payload: true });
    // Call the parent's onPageChange, which handles updating the URL with all params
    onPageChange(currentPage - 1);
    // REMOVED: router.push(`${router.route}?page=${currentPage - 1}`);
  };

  const numChange = (pageNumber: number) => {
    dispatch({ type: ACTIONS.LOADING, payload: true });
    // Call the parent's onPageChange, which handles updating the URL with all params
    onPageChange(pageNumber);
    // REMOVED: router.push(`${router.route}?page=${pageNumber}`);
  };

  // Ensure lastPage is correctly calculated and safe, especially with potential undefined currentPage
  let lastPage = paginationRange[paginationRange.length - 1];
  const isLastPageValid = typeof lastPage === 'number' && currentPage !== undefined;

  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      {!device && (
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={currentPage === 1 ? undefined : onPrevious} // Disable click if on first page
        >
          <div className="arrow left" />
        </li>
      )}

      <>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={`dots-${index}`} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={index}
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => numChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </>

      {!device && (
        <li
          className={classnames("pagination-item", {
            disabled: isLastPageValid && currentPage === lastPage,
          })}
          onClick={isLastPageValid && currentPage === lastPage ? undefined : onNext} // Disable click if on last page
        >
          <div className="arrow right" />
        </li>
      )}
    </ul>
  );
};

export default Paginate;