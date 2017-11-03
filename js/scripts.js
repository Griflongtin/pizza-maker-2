// BACKEND
function pizza() {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

pizza.prototype.sizeOfPizza = function (input) {
  this.size = input;
};

pizza.prototype.toppings = function (input) {
  this.toppings += input;
};

pizza.prototype.cost = function () {
  if(this.size = "Small") {
    this.cost += 10;
  } else if (this.size = "Medium") {
    this.cost += 14;
  } else if (this.size = "Large") {
    this.cost += 16;
  }

  this.toppings.forEach(function(topping) {
    this.cost += .75;
  });
};


// FRONT END
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:checkbox[name=pizza-size];checked").val();

    });
  });



});
