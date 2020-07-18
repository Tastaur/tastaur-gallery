import {combineReducers, compose, createStore} from 'redux'
import galleryReducer from './galeryReducer'
import {reducer as formReducer} from 'redux-form'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let reducers = combineReducers({
  gallery: galleryReducer,
  form: formReducer,
})
//add config
const persistConfig = {
  key: 'root',
  storage,
}
//add redux-devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//add persist
const persistedReducer = persistReducer(persistConfig, reducers);

//create store
export const store = createStore(persistedReducer, composeEnhancers());

export const persistor = persistStore(store);

window.store = store

export default store
