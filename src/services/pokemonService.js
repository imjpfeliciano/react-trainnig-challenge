const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (pokemonId) => {
    const pokemonResponse = await fetch(`${POKEMON_API_URL}/${pokemonId}`);
    const pokemonData = await pokemonResponse.json();

    return pokemonData;
}