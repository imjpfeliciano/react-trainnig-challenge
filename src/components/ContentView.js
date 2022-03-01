import React, { useState } from 'react';
import { PokeList } from './PokeList';
import styled from 'styled-components';

const AppContainer = styled.div`
background-color: #00b392;
margin:0 auto;
padding: 2rem;
`;

export function ContentView(){
    const [items, setItems] = useState([
        {
           "id" : "1", "pokeName" : "bulbasaur",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        },
        {
           "id" : "2", "pokeName" : "ivysaur",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
        },
        {
           "id" : "3", "pokeName" : "venusaur",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
        },
        {
           "id" : "4", "pokeName" : "charmander",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
        },
        {
           "id" : "5", "pokeName" : "charmeleon",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
        },
        {
           "id" : "6", "pokeName" : "charizard",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
        },
        {
           "id" : "7", "pokeName" : "vamo a calmarno",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        },
        {
           "id" : "8", "pokeName" : "wartortle",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
        },
        {
           "id" : "9", "pokeName" : "blastoise",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
        },
        {
           "id" : "10", "pokeName" : "caterpie",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
        },
        {
           "id" : "11", "pokeName" : "metapod",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
        },
        {
           "id" : "12", "pokeName" : "butterfree",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
        },
        {
           "id" : "13", "pokeName" : "weedle",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"
        },
        {
           "id" : "14", "pokeName" : "kakuna",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"
        },
        {
           "id" : "15", "pokeName" : "beedrill",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
        },
        {
           "id" : "16", "pokeName" : "pidgey",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        },
        {
           "id" : "17", "pokeName" : "pidgeotto",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"
        },
        {
           "id" : "18", "pokeName" : "pidgeot",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
        },
        {
           "id" : "19", "pokeName" : "rattata",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"
        },
        {
           "id" : "20", "pokeName" : "raticate",
            "url": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
        }
    ]);

    return(
        <AppContainer>
            <div className='container'>
                <h1>
                    My Album!
                </h1>
                <PokeList items = {items}/>
                <div align="Center">
                <button > {'<<'} </button>{' '}
                <button >{'<'} </button>{' '}
                <button >{'>'} </button>{' '}
                <button >{'>>'} </button>{' '}
            </div>
            </div>
    </AppContainer>
    )
}