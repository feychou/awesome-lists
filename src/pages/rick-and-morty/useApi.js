import { useEffect, useState } from "react";
import "./styles.css";

function useApi() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});

  function loadCharacters(
    url = "https://rickandmortyapi.com/api/character/?page=1"
  ) {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setCharacters(json.results);
        setInfo(json.info);
      })
      .catch(() => console.log("Request failed"));
  }

  useEffect(loadCharacters, []);

  return [characters, info, isLoading, loadCharacters];
}

export default useApi;
