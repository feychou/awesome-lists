import { useState, useEffect } from "react";

const API_ROOT = "https://hn.algolia.com/api/v1/search?";

export default function useHN() {
  const [infoList, setInfoList] = useState([]);
  const [searchParams, setSearchParams] = useState({
    page: 0,
    searchQuery: ""
  });
  const [maxPage, setMaxPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(loadNews, [searchParams]);

  function loadNews() {
    const { searchQuery, page } = searchParams;
    const url = searchQuery
      ? `${API_ROOT}query=${searchQuery}&page=${page}`
      : `${API_ROOT}tags=front_page&page=${page}`;

    setIsloading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setIsloading(false);
        setInfoList(json.hits);
        setMaxPage(json.nbPages);
      })
      .catch(() => setError(true));
  }

  const search = () => {
    if (inputVal.trim() !== "" && inputVal.length > 2) {
      setSearchParams({
        ...searchParams,
        page: 0,
        searchQuery: inputVal
      });
    } else {
      alert("Searchbar should be at least 3 chars");
    }
  };

  return {
    isLoading,
    searchQuery,
    inputVal,
    setInputVal,
    search,
    searchParams,
    error,
    infoList,
    setSearchQuery,
    setSearchParams,
    loadNews,
    maxPage
  };
}
