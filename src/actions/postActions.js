import { FETCH_POSTS, NEW_POST } from './types';

// export function fetchPosts(){
//     return function(dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => dispatch({
//           type: FETCH_POSTS,
//           payload: posts
//         }));
//     }
// }
// CLEANED UP with ES6 below:
export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    );    
};