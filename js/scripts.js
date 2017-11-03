// BACKEND
function pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

pizza.prototype.costSize = function () {
  if(this.size = "Small") {
    this.cost += 10;
  } else if (this.size = "Medium") {
    this.cost += 14;
  } else if (this.size = "Large") {
    this.cost += 16;
  }
};

pizza.prototype.costTopping = function () {
  this.cost += .75;
};

pizza.prototype.orderCost = function () {
  for (var i = 0; i < this.toppings.length; i++) {
    this.costTopping();
  }
  this.costSize();
};

// FRONT END
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizza-size").val();
    var pizzaTopping = [];
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      pizzaTopping.push($(this).val());
    });
    var orderPizza = new pizza(pizzaSize, pizzaTopping);
    debugger
    orderPizza.orderCost();
    console.log(orderPizza);
  });
});
