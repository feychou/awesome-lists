import React from "react";

import usePokemon from "./usePokemon";
import "./styles.css";

function PokemonAxios() {
  const pokemon = usePokemon();

  return (
    <div className="PokemonAxiosList">
      {pokemon.map(({ name }, index) => (
        <div className="Pokemon" key={index}>
          <img alt={name} src={`https://img.pokemondb.net/sprites/x-y/normal/${name}.png`} width={150} />
          <div className="PokemonName">{name}</div>
        </div>
      ))}
    </div>
  );
}

export default PokemonAxios;
