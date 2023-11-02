import React from "react";
import { ListPokemon, Pokemon } from "../interfaces";
import PokemonList from "./PokemonList";
import "./pokemon.css";
interface Props {
  pokemons: Pokemon[];
}

const PokemonCollection = (props: Props) => {
  const { pokemons } = props;
  return (
    <div>
      <section className="collection-container">
        {pokemons.map((pokemon) => {
          return (
            <React.Fragment>
              <PokemonList
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.front_default}
              />
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default PokemonCollection;
