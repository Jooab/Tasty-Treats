import axios from "axios";

async function getDesserts() {
  const response = await axios.get("/desserts/desserts.json");
  return response.data;
}

async function getDishes() {
  const response = await axios.get("/dishes/dishes.json");
  return response.data;
}

export { getDesserts, getDishes };
