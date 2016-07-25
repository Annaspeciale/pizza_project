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
    pizzaPrice += 10 ;
  } else if (this.size === "medium"){
    pizzaPrice += 14 ;
  } else if (this.size === "large" ){
    pizzaPrice += 16 ;
  }

  return totalPrice= ("$"+ pizzaPrice * this.quantity);

  };


// Frontend logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var checkedToppings= [];
    $(":checkbox:checked").each(function(topping){
      checkedToppings[topping] = $(this).val();
    });
    var selectedSize= $("select#new-size").val();
    var inputtedQuantity= parseInt($("input#new-quantity").val());
    var newPizza= new Pizza(inputtedName,checkedToppings ,selectedSize,inputtedQuantity);
    newPizza.totalPrice= newPizza.price();


    $("#pizza").show();
    $(".name").text(newPizza.name);
    $(".toppings").text(newPizza.toppings);
    $(".size").text(newPizza.size);
    $(".quantity").text(newPizza.quantity);
    $(".totalPrice").text(newPizza.totalPrice);

});
});