import React from 'react';

const Pokemon = (props) => {
    const {pokemon} = props;
    return(
    <div class='pokemon'>

    <h3>{pokemon.name}</h3>

    <img width='300' src={pokemon.url}/>
    
    </div>);
}

export default Pokemon;