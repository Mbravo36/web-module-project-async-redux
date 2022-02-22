import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getPokemon = () => {
    return(dispatch => {
        dispatch({type: FETCH_START})
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
    });
}
export const fetchStart = () => {
    return({type: FETCH_START})
}
export const fetchSuccess = (pokemen) => {
    return({type: FETCH_SUCCESS, payload: pokemen})
}