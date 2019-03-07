import axios from "axios";
// we'll need axios

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"; 
export const FETCH_CHARACTERS_FAILURE = "FETCHING_CHARACTERS_FAILURE";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCH_CHARACTERS });
    axios.get('https://swapi.co/api/people/')
    .then(({ data }) => {
        console.log(data);
        dispatch({
            type: FETCH_CHARACTERS_SUCCESS,
            payload: data.results
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_CHARACTERS_FAILURE,
            payload: err
        });
    });
};


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
