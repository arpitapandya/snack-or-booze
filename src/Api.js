import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

export async function fetchItems(type) {
  let res = await axios.get(`${BASE_API_URL}/${type}`);
  return res.data;
}


export async function addItem(type, data) {
  await axios.post(`${BASE_API_URL}/${type}`, data);
}