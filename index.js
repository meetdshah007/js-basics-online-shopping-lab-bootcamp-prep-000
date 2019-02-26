var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let str="In your cart, you have";
  for(let i=0;i<cart.length;i++){
    const info = cart[i];
    str+= i === cart.length - 1 ? "and ": "";
    str+=`${info.itemName} at ${info.itemPrice}${i=== cart.length - 1 ? ".": ", "}`;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
