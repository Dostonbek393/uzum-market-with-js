const totalAmountEl = document.querySelector(".total-amount");

export const allAddeProducts =
  JSON.parse(localStorage.getItem("products")) || [];

export function showProducts() {
  console.log(allAddeProducts);
  allAddeProducts.forEach((p) => {});
}

export function addProduct(p) {
  const item = allAddeProducts.find((el) => el.id == p.id);
  if (item) {
    item.amount += 1;
  } else {
    allAddeProducts.push({ ...p, amount: 1 });
  }

  localStorage.setItem("products", JSON.stringify(allAddeProducts));
  showProducts();
}
