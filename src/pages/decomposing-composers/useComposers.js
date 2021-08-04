import { useState, useEffect } from "react";

const BASE_URL = "https://api.openopus.org/composer/list/";

function useComposers() {
  const [items, setItems] = useState(null);

  const loadComposers = (searchQuery) => {
    const url = searchQuery
      ? `${BASE_URL}/search/${searchQuery}.json`
      : `${BASE_URL}pop.json`;
    setItems(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Oh noo");
        return res.json();
      })
      .then((data) => setItems(data.composers || []))
      .catch((err) => console.log(err.message));
  };

  useEffect(loadComposers, []);

  return [items, loadComposers];
}

export default useComposers;
