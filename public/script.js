const test = document.getElementById("test");
const addItem = document.getElementById("addItem");

test.addEventListener("click", testApp);
addItem.addEventListener("click", addNew);

function testApp() {
  console.log("hello");
  const data = {
    test: "hello",
    test2: "hello again",
  };
  const options = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  fetch("http://localhost:3000/test", options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

let items = [
  {
    name: "Miško gėlių skynimas",
    location: "Valkininkai",
    price: 19,
    maxStay: 3,
    maxPerson: 4,
    validTo: 1657843200,
    picture: "https://picsum.photos/id/976/200/300",
  },
  {
    name: "Rugiapjūtė",
    location: "Valkininkai",
    price: 45,
    maxStay: 2,
    maxPerson: 12,
    validTo: 1663200000,
    picture: "https://picsum.photos/id/98/200/300",
  },
  {
    name: "Pasiplaukiojimas vandenyne",
    location: "Valkininkai",
    price: 76,
    maxStay: 2,
    maxPerson: 2,
    validTo: 1639526400,
    picture: "https://picsum.photos/id/914/200/300",
  },
  {
    name: "Uoginių glotnučių gamyba",
    location: "Valkininkai",
    price: 16,
    maxStay: 3,
    maxPerson: 4,
    validTo: 1702598400,
    picture: "https://picsum.photos/id/889/200/300",
  },
  {
    name: "Vilniaus panoramos",
    location: "Vilnius",
    price: 99,
    maxStay: 2,
    maxPerson: 2,
    validTo: 1684108800,
    picture: "https://picsum.photos/id/862/200/300",
  },
  {
    name: "Fejerverkų gamybos dirbtuvės",
    location: "Vilnius",
    price: 112,
    maxStay: 6,
    maxPerson: 12,
    validTo: 1652572800,
    picture: "https://picsum.photos/id/828/200/300",
  },
  {
    name: "Kulnarinės dirbtuvės 'Elegancija'",
    location: "Vilnius",
    price: 11,
    maxStay: 2,
    maxPerson: 8,
    validTo: 1663200000,
    picture: "https://picsum.photos/id/835/200/300",
  },
  {
    name: "Ekstremalus iššūkis- plaukimas nerimi",
    location: "Vilnius",
    price: 32,
    maxStay: 4,
    maxPerson: 4,
    validTo: 1673740800,
    picture: "https://picsum.photos/id/841/200/300",
  },
  {
    name: "Kopimas laiptais į rūką",
    location: "Kaunas",
    price: 29,
    maxStay: 3,
    maxPerson: 5,
    validTo: 1657843200,
    picture: "https://picsum.photos/id/842/200/300",
  },
  {
    name: "Pramoga visai šeimai- kur tie paukščiai",
    location: "Kaunas",
    price: 55,
    maxStay: 2,
    maxPerson: 10,
    validTo: 1663200000,
    picture: "https://picsum.photos/id/847/200/300",
  },
  {
    name: "Netikėtas vaisius pievoje",
    location: "Kaunas",
    price: 86,
    maxStay: 2,
    maxPerson: 8,
    validTo: 1639526400,
    picture: "https://picsum.photos/id/824/200/300",
  },
  {
    name: "Pilki konkorėžiai paslaptingi",
    location: "Kaunas",
    price: 26,
    maxStay: 3,
    maxPerson: 2,
    validTo: 1702598400,
    picture: "https://picsum.photos/id/800/200/300",
  },
];

function addNew() {
  items.map((item) => {
      addToCollection(item)    
  });
}


function addToCollection(item) {
    const options = {
        method: "post",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json",
        },
      };
      fetch("http://localhost:3000/createShop", options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
}