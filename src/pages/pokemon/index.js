import React, { useEffect, useState } from "react";
import "./styles.css";


function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then(response => response.json())
      .then(json => setPokemon(json.results))
      .catch(() => console.log("Request failed"));
  }, []);

  return (
    <div className="PokemonList">
      {pokemon.map(({ name }, index) => (
        <div className="Pokemon" key={index}>
          <img alt={name} src={`https://img.pokemondb.net/sprites/x-y/normal/${name}.png`} width={150} />
          <div className="PokemonName">{name}</div>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;