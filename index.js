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
  if(!cart.length) return "Your shopping cart is empty.";
  
  let str="In your cart, you have ";
  for(let i=0;i<cart.length;i++){
    const info = cart[i];
    str+= (i === cart.length - 1 && i > 0)? "and ": "";
    str+=`${info.itemName} at ${info.itemPrice}${i=== cart.length - 1 ? ".": ", "}`;
  }
  return str;
}

function total() {
  // write your code here
  let sum = 0;
  for(let i=0;i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  const index = cart.find(i=> i.itemName === item);
  if(index === -1) {
    return "That item is not in your cart."
  }
  cart.splice(index, 1);
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) return "Sorry, we don't have a credit card on file for you.";
  cart = [];
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}`;
}
