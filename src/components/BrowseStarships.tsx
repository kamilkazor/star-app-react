import React, { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useStarships from "../queries/useStarships";
import PaginationButtons from "./PaginationButtons";
import StarshipCard from "./StarshipCard";
import StarshipCardSceleton from "./StarshipCardSceleton";

function BrowseStarships() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) : 1
  );
  const { data, isLoading, isError, error } = useStarships(page);

  useEffect(() => {
    const queryPage = searchParams.get("page");
    queryPage ? setPage(Number(queryPage)) : setPage(1);
  }, [location]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);
  function goPrevPage() {
    setSearchParams({ page: (page - 1).toString() });
  }
  function goNextPage() {
    setSearchParams({ page: (page + 1).toString() });
  }

  return (
    <>
      <div className="mt-20 mb-10">
        <PaginationButtons
          page={page}
          prev={!!data?.data.previous}
          next={!!data?.data.next}
          prevHandler={goPrevPage}
          nextHandler={goNextPage}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          exit={{
            opacity: 0,
            y: 100,
          }}
        >
          {data && (
            <ul className="grid sm:grid-cols-2 gap-5">
              {data.data.results.map((starship, index) => (
                <StarshipCard starship={starship} key={index} />
              ))}
            </ul>
          )}
          {isLoading && (
            <ul className="grid sm:grid-cols-2 gap-5">
              {Array.from({ length: 10 }, (_, index) => (
                <StarshipCardSceleton key={index} />
              ))}
            </ul>
          )}
          {isError && (
            <div className="card card-shape">
              <h2 className="card-text-important text-2xl">
                Something is not right...
              </h2>
              <p className="mb-5 card-text-important">
                Please make sure that the address is correct and try again
                later.
              </p>
              <p className="text-sm">
                Error: {error instanceof Error && error.message}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="mt-10 mb-20">
        <PaginationButtons
          page={page}
          prev={!!data?.data.previous}
          next={!!data?.data.next}
          prevHandler={goPrevPage}
          nextHandler={goNextPage}
        />
      </div>
    </>
  );
}

export default BrowseStarships;
