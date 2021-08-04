import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function PokemonModal() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setPokemon(json.results);
      })
      .catch(() => console.log("Request failed"));
  }, []);

  const toggle = () => setModal(!modal);

  const selectPokemon = (pokemonInfo) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInfo.id}`)
      .then((response) => response.json())
      .then((json) => {
        setSelectedPokemon({
          ...pokemonInfo,
          abilities: json.abilities
        });
        toggle();
      })
      .catch(() => console.log("Request failed"));
  };

  return (
    <div className="PokemonModalList">
      {isLoading
        ? "loading..."
        : pokemon.map(({ name }, index) => (
            <div
              onClick={() => selectPokemon({ name, id: index + 1 })}
              className="Pokemon"
              key={index}
            >
              <img 
                alt={name} 
                src={`https://img.pokemondb.net/sprites/x-y/normal/${name}.png`}
                width="150"
              />
              <div className="PokemonName">{name}</div>
            </div>
          ))}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{selectedPokemon.name}</ModalHeader>
        <ModalBody>
          <img
            alt={selectedPokemon.name}
            src={`https://img.pokemondb.net/sprites/x-y/normal/${selectedPokemon.name}.png`}
            width="150"
          />
          <h3>abilities</h3>
          {selectedPokemon.abilities?.map(({ ability }) => (
            <div>{ability.name}</div>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button className="PokemonModalCancelButton" color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PokemonModal;
