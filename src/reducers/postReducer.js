import { FETCH_POSTS, NEW_POST } from '../action/types';

const initialState = {
    items: [], 
        // represents posts that come in from the action/fetch req
    item: {} 
        // represents a single new post that we get from the response
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}