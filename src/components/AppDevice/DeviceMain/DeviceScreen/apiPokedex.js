import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

const getPokemon = () => {
  const pokemonInfoList = new Array(5).fill(0).map((item, index) => {
    return P.getPokemonByName(index + 1);
  });
  const data = Promise.allSettled(pokemonInfoList);
  return data;
};

export const formatedPokemonData = async () => {
  const pokemonData = await getPokemon();
  const formattedData = pokemonData.map((item) => {
    const promisedValue = item.value;
    return {
      name: promisedValue.name,
      order: promisedValue.order,
      pixelSprite: promisedValue.sprites.front_default,
      sprite: promisedValue.sprites.other["official-artwork"].front_default,
    };
  });
  return formattedData;
};
