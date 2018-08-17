import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer 
    //posts is just a name that was chosen, it could be foo.
});