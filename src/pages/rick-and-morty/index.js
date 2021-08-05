import React from "react";
import useApi from "./useApi";
import Pagination from './Pagination';

import "./styles.css";

function RickAndMortyCharacters() {
  const [characters, info, isLoading, loadCharacters] = useApi();

  return (
    <div className="RickAndMorty">
      <Pagination info={info} load={loadCharacters} />
      <div className="CharactersList">
        {isLoading
          ? "loading..."
          : characters.map(({ name, status, location, image }, index) => (
              <div className="Character" key={index}>
                <img alt={name} src={image} width="150" />
                <div className="CharacterName">{name}</div>
                <div className="CharacterName">Status: {status}</div>
                <div className="CharacterName">
                  Last known location: {location.name}
                </div>
              </div>
            ))}
      </div>
      <Pagination info={info} load={loadCharacters} />
    </div>
  );
}

export default RickAndMortyCharacters;
