import React from 'react';

import styled from 'styled-components';
const ImgContainer = styled.img`
width: 250px;
`;


export function PokeItem({ item }){
    const { pokeName, url } = item
    return(    
        <li>
            {pokeName}
            <ImgContainer src={url} alt ="pokelogo"/>
        </li>
        
    );
}