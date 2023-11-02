import React from "react";

interface Props {
  id: number;
  name: string;
  image: string;
}

const PokemonList = (props: Props) => {
  const { id, name, image } = props;
  return (
    <section className="pokemon-container">
      <p className="pokemon-name">{name}</p>
      <img src={image} alt="pokemon" />
    </section>
  );
};

export default PokemonList;
