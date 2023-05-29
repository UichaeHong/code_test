const test = document.querySelector(".test");

function sayHello(name = "hi") {
  const msg = `Hello, ${name}`;
  console.log(msg);
}
sayHello();
