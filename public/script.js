const test = document.getElementById("test");
console.log('hello')

test.addEventListener("click", testApp);

function testApp() {
    console.log('hello')
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
