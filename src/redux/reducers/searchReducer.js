import { SET_SEARCH_QUERY, SET_SEARCH_RESULTS, GET_SEARCH, SET_SEARCH_ERROR, SET_ERROR_MESSAGE, SET_SEARCH_LOADING } from "../actions";

const initialState = {
    searchQuery: '',
    searchResults: [],
    isLoading: true,
    isError: false,
    errorMessage: '',
};

const searchReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };

        case SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload,
            };

        case GET_SEARCH:
            return {
                ...state,
                searchResults: action.payload,
            };

        case SET_SEARCH_ERROR:
            return {
                ...state,
                isError: action.payload,
            };

        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload,
            };

        case SET_SEARCH_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        default:
            return state;
    }
};

export default searchReducers;
