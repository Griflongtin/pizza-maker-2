// BACKEND
function pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

pizza.prototype.costSize = function () {
  if (this.size = "Small") {
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
    var inputTest = false;
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      pizzaTopping.push(" " + $(this).val());
      inputTest = true;
    });
    if (inputTest === false) {
      alert("Pick a Topping");
    }else {
      var orderPizza = new pizza(pizzaSize, pizzaTopping);
      orderPizza.orderCost();
      $("form").hide();
      $("#output-div").show();
      $("#pizza-size-output").text(orderPizza.size);
      $("#pizza-topping-output").text(orderPizza.toppings);
      $("#pizza-cost-output").text("$" + orderPizza.cost);
    }
  });
});
