import React from "react";
import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();

const PokemonCard = () => {
  P.getResource(["/api/v2/pokemon/36"]).then((response) => {
    console.log(response); // resource function accepts singles or arrays of URLs/paths
  });

  P.getResource("api/v2/berry/5").then((response) => {
    console.log(response);
  });

  return <div>Pokemon</div>;
};

export default PokemonCard;
