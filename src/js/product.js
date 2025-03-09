import { fetchData } from "./fetchData.js";
import { showProduct } from "./updateUI.js";
import { showProducts } from "./updateProduct.js";

import "./dark-mode.js";

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");

fetchData("https://dummyjson.com/product/" + id)
  .then((product) => {
    showProduct(product);

    document.getElementById("main-image").src = product.thumbnail;
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-price").textContent =
      `Narx: $${product.price}`;
    document.getElementById("product-discount").textContent =
      `Chegirma: ${product.discountPercentage}%`;
    document.getElementById("final-price").textContent = `Final narx: $${(
      product.price -
      (product.price / 100) * product.discountPercentage
    ).toFixed(2)}`;
    document.getElementById("product-rating").textContent = product.rating;
    document.getElementById("product-description").textContent =
      product.description;

    const thumbnailsContainer = document.querySelector(".grid.grid-cols-4");
    thumbnailsContainer.innerHTML = "";
    product.images.slice(0, 4).forEach((img) => {
      const imgElement = document.createElement("img");
      imgElement.src = img;
      imgElement.classList.add(
        "thumbnail",
        "h-20",
        "w-20",
        "cursor-pointer",
        "rounded-md",
        "hover:scale-110",
        "transition",
      );
      imgElement.addEventListener("click", () => {
        document.getElementById("main-image").src = img;
      });
      thumbnailsContainer.appendChild(imgElement);
    });
  })
  .catch((error) => {
    console.error("Xatolik:", error);
  });
