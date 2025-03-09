import "./dark-mode.js";

import { fetchData } from "./fetchData.js";
import { showCards } from "./updateUI.js";

fetchData("https://dummyjson.com/products?limit=194")
  .then((data) => {
    showCards(data);
  })
  .catch((error) => {
    console.log(error);
  });
