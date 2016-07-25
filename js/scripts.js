//Backend logic
function Pizza(name, toppings, size, quantity, totalPrice) {
  this.name = name;
  this.toppings = toppings
  this.size = size;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}

Pizza.prototype.price = function() {
var pizzaPrice = 0;

  if (this.size === "small" ){
    pizzaPrice += 7 ;
  } else if (this.size === "medium"){
    pizzaPrice += 12 ;
  } else if (this.size === "large" ){
    pizzaPrice += 15 ;
  }

  return totalPrice= ("$"+ pizzaPrice * this.quantity);

  };


