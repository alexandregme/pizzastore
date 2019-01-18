export const TOPPINGS = [{
  name:"topping 1",
  price:1,
  isChecked:true
},{
  name:"topping 2",
  price:2,
  isChecked:false
},{
  name:"topping 3",
  price:3,
  isChecked:false
},{
  name:"topping 4",
  price:4,
  isChecked:false
},{
  name:"topping 5",
  price:5,
  isChecked:false
},{
  name:"topping 6",
  price:6,
  isChecked:false
},{
  name:"topping 7",
  price:7,
  isChecked:false
},{
  name:"topping 8",
  price:8,
  isChecked:false
}];

export const DEFAULT_TOPPING = {
  name:"default topping",
  price:0,
  isChecked:false
};

export const CUSTOM_TOPPING = {
  name:"custom topping",
  price:1,
  isChecked:true
};

export const DEFAULT_PIZZA = {
  "name": "default pizza",
  "maxToppings": 0,
  "basePrice": 0,
  "totalPrice": 0,
  toppings:[]
};

export const CUSTOM_PIZZA = {
  "name": "custom pizza",
  "maxToppings": 1,
  "basePrice": 1,
  "totalPrice": 1,
  toppings:[{
    name:"topping 1",
    price:1,
    isChecked:true
  }]
};

export const PIZZAS = [{
  "name": "small",
  "maxToppings": 3,
  "basePrice": 9.89,
  toppings: TOPPINGS
},{
  "name": "medium",
  "maxToppings": 5,
  "basePrice": 10.89,
  toppings: TOPPINGS
}, {
  "name": "large",
  "maxToppings": null,
  "basePrice": 13.49,
  toppings: TOPPINGS
}];
