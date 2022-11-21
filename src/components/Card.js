import React from 'react';


function Card({ pokemon}) {
  const style = `poke-card ${pokemon.type}`;
    return (
      <div className={style}>
            <div className="poster">
                <img class="poster" src={pokemon.sprites.other.dream_world.front_default} alt="" />
            </div>
            <div className="poke-details">
            <div className="box">
               #{pokemon.id}
               <br/>
                {pokemon.name}
            </div>
            </div>
            </div>

    );
}

export default Card;
