import { useState, useEffect } from "react";
import axios from "axios";

function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then(function (response) {
        console.log(response);
        setPokemon(response.data.results);
      })
      .catch(function (error) {
        console.log("Request failed");
      });
  }, []);

  return pokemon;
}

export default usePokemon;
