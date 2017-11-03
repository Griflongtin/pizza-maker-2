function pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

pizza.prototype.sizeOfPizza = function (size) {
  if (size = "small") {
    this.size = "Samll";
  } else if (size = "medium") {
    this.size = "Medium";
  } else if (size = "large") {
    this.size = "Large";
  }
};

pizza.prototype.toppings = function (toppings) {
  this.toppings = toppings;
};
