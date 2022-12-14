import React from "react";

function Card({ pokemon }) {
  const style = `poke-card ${pokemon.types[0].type.name}`;
  return (
    <div className="overlay-wrapper">
      <div className={style}>
        <div className="poster">
          <img
            class="poster-img"
            src={pokemon.sprites.other.dream_world.front_default}
            alt=""
          />
          <div class="overlay">
            <div class="text">
              <div className="stats">
                Type: {pokemon.types[0].type.name}
                <br />
                Ability: {pokemon.abilities[0].ability.name}
                <br />
                Height: {pokemon.height}
                <br />
                Weight: {pokemon.weight}
                <br />
                <br />
                <br />
                HP: {pokemon.stats[0].base_stat}
                <br />
                Attack: {pokemon.stats[1].base_stat}
                <br />
                Defense: {pokemon.stats[2].base_stat}
                <br />
                Spec. Atk: {pokemon.stats[3].base_stat}
                <br />
                Spec. Def: {pokemon.stats[4].base_stat}
                <br />
                Speed: {pokemon.stats[5].base_stat}
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="poke-details">
          <div className="box">
            No.{pokemon.id}
            <br />
            {pokemon.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
