import {combineReducers, compose, createStore} from 'redux'
import galleryReducer from './galeryReducer'

import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
  gallery: galleryReducer,
  form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers())
window.store = store

export default store
