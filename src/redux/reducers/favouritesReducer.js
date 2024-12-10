import { MANAGE_FAVOURITES } from '../actions';

const initialState = { content: ['AAA', 'NINO', 'PINTO', 'SANTOMARIO'] };

const favouritesReducers = (state = initialState, action) => {
    switch (action.type) {
        case MANAGE_FAVOURITES:
            if (state.content.includes(action.payload)) {
                // Rimuovi l'azienda dai preferiti
                return {
                    ...state,
                    content: state.content.filter((company) => company !== action.payload)
                };
            } else {
                // Aggiungi l'azienda ai preferiti
                return {
                    ...state,
                    content: [...state.content, action.payload]
                };
            }
        default:
            return state;
    }
};

export default favouritesReducers;
