import React, { useState, useEffect } from "react";
import { getPokemon, getAllPokemon } from "./helpers/Pokemon";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

const Main = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  // eslint-disable-next-line no-unused-vars
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
    }
    fetchData();
  }, []);

  const next = async () => {
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  };

  const prev = async () => {
    if (!prevUrl) return;
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  };

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>

      <div className="card container">
        {pokemonData.map((pokemon, i) => {
          return <Card key={i} pokemon={pokemon} />;
        })}
      </div>
      <div className="pagination">
        <button class="pbutton" onClick={prev}>
          Prev
        </button>
        <button class="pbutton" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
};
export default Main;
