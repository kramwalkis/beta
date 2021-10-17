let searchOptions = document.querySelectorAll(".searchOptions");
const price = document.getElementById("price");
const shopWrapper = document.getElementById("shopWrapper");

const optionsObject = {
  maxStay: 1,
  maxPerson: 1,
  location_Valkininkai: false,
  location_Vilnius: false,
  location_Kaunas: false,
  price: 112,
};

searchOptions.forEach((item) => {
  item.addEventListener("click", recordChanges);
});
price.addEventListener("change", recordChanges);

getOffers();

function getOffers() {
  fetch("http://localhost:3000/getShop")
    .then((response) => response.json())
    .then((data) => {
      data.success
        ? displayShop(data.items)
        : (shopWrapper.innerHTML = `
      <h2 class="text-center m-4">${data.message}</h2>`);
    });
}

function displayShop(data) {
  shopWrapper.innerHTML = "";
  data.map((item) => {
    shopWrapper.innerHTML += `
    <div class="col-12 col-lg-6">
    <div class="offer m-2">
      <div class="imageHolder d-flex justify-content-center">
        <img
          class="img-fluid"
          src="${item.picture}"
          alt=""
        />
      </div>
      <div class="infoContainer">
        <h3 class="m-2">${item.name}</h3>
        <div class="d-flex">
          <div class="m-2"><i class="bi bi-geo-alt icons"></i></div>
          <div class="m-2">${item.location}</div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="m-2">
            <h5>Nuo</h5>
            <h2 class="priceTag">${item.price}$</h2>
          </div>
          <div class="m-2">
            <div class="d-flex">
              <div class="m-1">
                <i class="bi bi-people icons"></i>
              </div>
              <div class="m-1"><strong>1-${item.maxStay} Nakvynės</strong></div>
            </div>
            <div class="d-flex">
              <div class="m-1"><i class="bi bi-clock icons"></i></div>
              <div class="m-1"><strong>1-${
                item.maxPerson
              } Asmenys</strong></div>
            </div>
            <div class="d-flex">
              <div class="m-1">
                <i class="bi bi-calendar-check icons"></i>
              </div>
              <div class="m-1"><strong>${new Date(item.validTo * 1000)
                .toISOString()
                .slice(0, 10)}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  });
}

function recordChanges(event) {
  if (Number(event.target.value)) {
    optionsObject[event.target.name] = Number(event.target.value);
  } else {
    searchOptions.forEach((item) => {
      Number(item.value) ? null : (optionsObject[item.name] = item.checked);
    });
  }
  const options = {
    method: "post",
    body: JSON.stringify(optionsObject),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("http://localhost:3000/filteredShop", options)
    .then((response) => response.json())
    .then((data) => {
      data.data
        ? displayShop(data.data)
        : (shopWrapper.innerHTML = `
      <h2 class="text-center m-4">${data.message}</h2>`);
    });
}
