import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import favouritesReducers from "../reducers/favouritesReducer"
import searchReducers from "../reducers/searchReducer"

const mainReducer = combineReducers({
    search: searchReducers,
    favourites: favouritesReducers, // Rinomina per maggiore chiarezza
});


const persistConfig = {
    key: 'root', // a che livello salvare il redux store
    storage: localStorage, // che motore "di appoggio" utilizzare
}
const persistedReducer = persistReducer(persistConfig, mainReducer)

const store = configureStore({
    reducer: persistedReducer, // ricostruito tramite le fette
})

export const myPersistStore = persistStore(store)
export default store
