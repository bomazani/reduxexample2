import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, // need to create a reducers folder in src folder
    initialState, 
    applyMiddleware(...middleware)
);

export default store;