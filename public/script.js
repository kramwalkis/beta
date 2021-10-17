let searchOptions = document.querySelectorAll(".searchOptions");
const priceValue = document.getElementById("priceValue");
const price = document.getElementById("price");
const optionsObject = {};
const shopArray = [];

function getOffers() {
  fetch("http://localhost:3000/getShop")
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        data.items.map((item) => {
          item.display = true;
          shopArray.push(item);
        });
        displayShop(shopArray)
      } 
    });
}

function displayShop(data) {
  
}

getOffers();

searchOptions.forEach((item) => {
  item.addEventListener("click", recordChanges);
});
price.addEventListener("change", recordChanges);

function recordChanges(event) {
  optionsObject.price = Number(priceValue.innerText);
  console.log(priceValue.innerText);
  searchOptions.forEach((item) => {
    console.log(item.name, item.checked);
  });
  console.log(optionsObject);
}
