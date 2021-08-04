import { useState, useEffect } from "react";

const BASE_URL = "https://api.openopus.org/composer/list/";

function useComposers() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadComposers = (searchQuery) => {
    const url = searchQuery
      ? `${BASE_URL}/search/${searchQuery}.json`
      : `${BASE_URL}pop.json`;
    setIsLoading(true);
    setError(false);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Oh noo");
        setIsLoading(false);
        return res.json();
      })
      .then((data) => setItems(data.composers || []))
      .catch((err) => setError(true));
  };

  useEffect(loadComposers, []);

  return [items, loadComposers, isLoading, error];
}

export default useComposers;
