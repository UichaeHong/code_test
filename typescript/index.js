// let add: string = "안녕";
// console.log(add);
function getGift(gift) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}
