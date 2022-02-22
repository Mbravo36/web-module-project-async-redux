import { FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
    pokemon: [],
    loading: false,
    err: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                loading: true,
                error:''
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                pokemon: action.payload,
                error: ''
            }
        default:
            return(state);
    }
}
export default reducer;