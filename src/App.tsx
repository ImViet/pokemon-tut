import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Detail, ListPokemon, Pokemon } from "./interfaces";
import PokemonCollection from "./components/PokemonCollection";
const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loadmore, setLoadmore] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [viewDetail, setViewDetail] = useState<Detail>({
    id: 0,
    isOpened: false,
  });

  //Run first time
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
      );
      setLoadmore(res.data.next);
      res.data.results.forEach(async (pokemon: ListPokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]); //...p là lấy lại mảng -> add thêm pokemon mới
        setLoading(false);
      });
    };
    getPokemon();
  }, []);

  //Handle load more pokemon
  const nextPage = async () => {
    setLoading(true);
    let res = await axios.get(loadmore);
    setLoadmore(res.data.next);
    res.data.results.forEach(async (pokemon: ListPokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="pokemon-header">Pokemon</div>
        <PokemonCollection
          pokemons={pokemons}
          viewDetail={viewDetail}
          setDetail={setViewDetail}
        />
        {!viewDetail.isOpened && (
          <div className="btn">
            <button className="btn-loadmore" onClick={nextPage}>
              {loading ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
