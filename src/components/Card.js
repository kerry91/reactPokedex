import React from "react";

function Card({ pokemon }) {
  
  const style = `poke-card ${pokemon.types[0].type.name}`;
  return (
    <div className="overlay-wrapper">
      <div className={style}>
        <div className="poster">
          <img
            class="poster"
            src={pokemon.sprites.other.dream_world.front_default}
            alt=""
          />
          <div class="overlay">
            <div class="text">
              Type: {pokemon.types[0].type.name}<br/>
              Ability: {pokemon.abilities[0].ability.name}<br/>
              Height: {pokemon.height}<br/>
              Weight: {pokemon.weight}<br/>
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
