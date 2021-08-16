import React from "react";

export default function Pagination({
  setSearchParams,
  searchParams,
  isLoading,
  setInputVal,
  setSearchQuery,
  maxPage
}) {
  const onClickNext = () => {
    setSearchParams({
      ...searchParams,
      page: searchParams.page + 1
    });
  };

  const onClickPrev = () => {
    setSearchParams({
      ...searchParams,
      page: searchParams.page - 1
    });
  };

  const reset = () => {
    setInputVal("");
    setSearchParams({
      searchQuery: "",
      page: 0
    });
  };

  return (
    <div className="Pagination">
      <button disabled={isLoading} onClick={reset}>
        Reset
      </button>
      <button
        disabled={searchParams.page === 0 || isLoading}
        onClick={onClickPrev}
      >
        Prev
      </button>
      <button
        disabled={searchParams.page === maxPage - 1 || isLoading}
        onClick={onClickNext}
      >
        Next
      </button>
    </div>
  );
}
