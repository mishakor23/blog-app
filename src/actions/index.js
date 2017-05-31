import axios from 'axios';
export conts FETCH_POSTS = fetch_posts;

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
constr API_KEY = '?key=qwertyasdf'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
