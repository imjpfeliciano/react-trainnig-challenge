import React from 'react';
import { PokeItem } from './PokeItem';
import styled from 'styled-components';
const UlContainer = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
font-weight: bold;
color: #ffea9f;
font-size: 1.2em;
text-align: center;
`;

export function PokeList({ items }){
    return(
    <UlContainer>
        {items.map((item) =>(
            <PokeItem
                key = {item.id} item = { item }
            />                 
        ))}
    </UlContainer>
    )
}