// BACKEND
function pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

pizza.prototype.sizeOfPizza = function (input) {
  this.size = input;
};

pizza.prototype.toppingsInput = function (input) {
  this.toppings = input;
};

pizza.prototype.orderCost = function () {
  this.toppings.forEach(function(topping) {
    console.log(topping);
    this.cost += 1;
  });
  if(this.size = "Small") {
    this.cost += 10;
  } else if (this.size = "Medium") {
    this.cost += 14;
  } else if (this.size = "Large") {
    this.cost += 16;
  }

};


// FRONT END
$(function() {
  var pizzaTopping = [];
  var orderPizza = new pizza();
  $("form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizza-size").val();
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      pizzaTopping.push($(this).val());
    });
    orderPizza.sizeOfPizza(pizzaSize);
    orderPizza.toppingsInput(pizzaTopping);
    debugger
    orderPizza.orderCost();
    console.log(orderPizza);
  });
});
