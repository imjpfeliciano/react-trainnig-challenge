import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { fetchPokemon } from "../services/pokemonService";

const PokemonPage = () => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const _fetchPokemon = async () => {
          const pokemonData = await fetchPokemon(1);
          setPokemon(pokemonData);
        };
    
        _fetchPokemon();
    }, [])

    if (!pokemon) return null;

    return <PokemonCard {...pokemon} />
}

export default PokemonPage;

