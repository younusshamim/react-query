import React, { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchAllColors } from "../services/color";

const InfiniteQueriesPage = () => {
  const handlePageParams = (_lastPage, pages) => {
    if (pages.length < 4) {
      return pages.length + 1;
    } else {
      return undefined;
    }
  };

  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery("allColors", fetchAllColors, {
    getNextPageParam: handlePageParams,
  });

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.data.map((color) => (
              <h2 key={color.id}>
                {color.id}. {color.label}
              </h2>
            ))}
          </Fragment>
        ))}
      </div>

      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load More
        </button>
      </div>

      <div>{isFetching && !isFetchingNextPage ? "Fetching.." : null}</div>
    </>
  );
};

export default InfiniteQueriesPage;
