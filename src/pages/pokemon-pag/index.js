import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

function PokemonPag() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  const loadPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`)
      .then((response) => {
        console.log(response);
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.log("Request failed");
      });
  };

  useEffect(loadPokemon, [offset]);

  const onClickPrev = () => {
    setOffset(offset - 9);
  };

  const onClickNext = () => {
    setOffset(offset + 9);
  };

  return (
    <div className="PokemonPagList">
      <div className="PokemonWrapper">
        {pokemon.map(({ name }, index) => (
          <div className="Pokemon" key={index}>
            <img
              alt={name}
              src={`https://img.pokemondb.net/sprites/x-y/normal/${name}.png`}
              width={150}
            />
            <div className="PokemonName">{name}</div>
          </div>
        ))}
      </div>
      <div className="Pagination">
        <button disabled={offset === 0} onClick={onClickPrev}>
          Prev
        </button>
        <button onClick={onClickNext} className="next">
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonPag;
