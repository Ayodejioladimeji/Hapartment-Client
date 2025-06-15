import React, { useContext, useEffect, useState } from "react";
import classnames from "classnames";
import { UsePagination, DOTS } from "./Usepagination";
import { useRouter } from "next/router";
import { screenPixels } from "@/utils/screenpx";
import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";

//

const Paginate = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;
  const [device, setDevice] = useState(false);
  const router = useRouter();
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

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    dispatch({ type: ACTIONS.LOADING, payload: true });
    onPageChange(currentPage + 1);
    router.push(`${router.route}?page=${currentPage + 1}`);
  };

  const onPrevious = () => {
    dispatch({ type: ACTIONS.LOADING, payload: true });
    onPageChange(currentPage - 1);
    router.push(`${router.route}?page=${currentPage - 1}`);
  };

  const numChange = (pageNumber: number) => {
    dispatch({ type: ACTIONS.LOADING, payload: true });
    onPageChange(pageNumber);
    router.push(`${router.route}?page=${pageNumber}`);
  };

  let lastPage =
    !state?.loading &&
    currentPage !== undefined &&
    paginationRange[paginationRange?.length - 1];

  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      {!device && (
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
      )}

      {/* {!device && ( */}
      <>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index} className="pagination-item dots">
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
      {/* )} */}

      {!device && (
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      )}
    </ul>
  );
};

export default Paginate;
