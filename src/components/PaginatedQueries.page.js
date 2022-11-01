import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchColors } from "../services/color";

const PaginatedQueriesPage = () => {
  // keepPreviousData: new data asa prjnto agerTak dhore rkhe and smothly swap hoye jay
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h2>Loading..</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.data.map((color) => (
          <h2 key={color.id}>
            {color.id}. {color.label}
          </h2>
        ))}
      </div>

      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </button>

        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
      </div>

      {isFetching && "Loading.."}
    </>
  );
};

export default PaginatedQueriesPage;
