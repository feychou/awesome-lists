import React, { useEffect, useState } from "react";
import classnames from "classnames";
import axios from "axios";

import "./styles.css";

function PokemonByType() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [types, setTypes] = useState([]);
  const [activeType, setActiveType] = useState("");

  const getAllTypes = () => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((response) => response.data.results)
      .then((resTypes) => {
        const realTypes = resTypes.filter(
          ({ name }) => name !== "shadow" && name !== "unknown"
        );
        const typePromises = realTypes.map(({ url }) =>
          axios.get(url).then((type) => type.data)
        );
        Promise.all(typePromises).then((results) => setTypes(results));
      })
      .catch((error) => {
        console.log("Request failed");
      });
  };

  const loadPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=721`)
      .then((response) => setPokemon(response.data.results))
      .catch((error) => {
        console.log("Request failed");
      });
  };

  useEffect(getAllTypes, []);
  useEffect(loadPokemon, []);

  const getOffsetPokemon = (activePokemon) =>
    activePokemon.slice(offset, offset + 9);

  const getPokemonToDisplay = () => {
    if (!activeType) return getOffsetPokemon(pokemon);

    const activePokemon = types.find(({ name }) => name === activeType).pokemon;
    const activePokemonNames = activePokemon.map(({ pokemon }) => pokemon.name);
    const activePokemonSubset = pokemon.filter(({ name }) =>
      activePokemonNames.includes(name)
    );
    const offsetPokemon = getOffsetPokemon(activePokemonSubset);

    return offsetPokemon;
  };

  const onClickPrev = () => {
    setOffset(offset - 9);
  };

  const onClickNext = () => {
    setOffset(offset + 9);
  };

  const onClickReset = () => {
    setOffset(0);
    setActiveType("");
  };

  const onFilterType = (type) => {
    setOffset(0);
    setActiveType(type);
  };

  return (
    <div className="PokemonByTypeList">
      <div className="TypesContainer">
        {types.map(({ name }, index) => (
          <span
            key={name}
            className={classnames(
              "TypeContainer",
              `TypeContainer--${name}`,
              activeType === name ? "active" : ""
            )}
            onClick={() => onFilterType(name)}
          >
            <span className="TypeName">{name}</span>
          </span>
        ))}
      </div>
      <div className="PokemonWrapper">
        {getPokemonToDisplay().map(({ name }, index) => (
          <div className="Pokemon" key={index}>
            <img
              alt={name}
              src={`https://img.pokemondb.net/sprites/x-y/normal/${name}.png`}
              width={120}
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
        <button onClick={onClickReset} className="next">
          Reset
        </button>
      </div>
    </div>
  );
}

export default PokemonByType;
