const toppings = ['topping1','topping2','topping3','topping4','topping5','topping6','topping7'];

export const DEFAULT_PIZZA = {
  "name": "default pizza",
  "maxToppings": 0,
  "basePrice": 0,
  toppings:[]
};

export const CUSTOM_PIZZA = {
  "name": "custom pizza",
  "maxToppings": 1,
  "basePrice": 1,
  toppings
};

export const PIZZAS = [{
  "name": "small",
  "maxToppings": 3,
  "basePrice": 9.89,
  toppings
},{
  "name": "medium",
  "maxToppings": 5,
  "basePrice": 10.89,
  toppings
}, {
  "name": "large",
  "maxToppings": null,
  "basePrice": 13.49,
  toppings
}];
