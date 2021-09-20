// use axios to make api calls
import axios from "axios";

// specify url pointing to backend route
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
