import React from "react";
import { connect } from "react-redux";
import Pokemon from "./Pokemon";

const PokeList = props => {
    const { pokemen } = props;

    return(
    <div id='pokeList'>
    {
        pokemen.map(pokemon => {
            return(
                <Pokemon pokemon={pokemon}/>
            )
        })
    }
    </div>);
}

    const mapStateToProps = state => {
    return{
        pokemen: state.pokemen
    }
}
export default connect(mapStateToProps)(PokeList);