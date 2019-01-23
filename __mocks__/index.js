export const LINKS = [
  {
    name:'Home',
    path:'/'
  },{
    name:'Cart',
    path:'/cart'
  }
];

export const TOPPINGS = [{
  pizzaSize: {
    name: "small"
  },
  topping: {
    name: "pepperoni",
    price: 0.4
  },
  defaultSelected: false
},
{
  pizzaSize: {
    name: "small"
  },
  topping: {
    name: "bannana peps",
    price: 0.89
  },
  defaultSelected: false
},
{
  pizzaSize: {
    name: "small"
  },
  topping: {
    name: "sausage",
    price: 1.29
  },
  defaultSelected: false
},
{
  pizzaSize: {
    name: "small"
  },
  topping: {
    name: "onion",
    price: 0.29
  },
  defaultSelected: false
},
{
  pizzaSize: {
    name: "small"
  },
  topping: {
    name: "green olives",
    price: 0.39
  },
  defaultSelected: false
},
{
  pizzaSize: {
    name: "small"
  },
  topping: {
    name: "cheese",
    price: 0.1
  },
  defaultSelected: true
},
{
  pizzaSize: {
    name: "small"
  },
  topping: {
    name: "bell peps",
    price: 0.22
  },
  defaultSelected: false
}];

export const DEFAULT_TOPPING = {
  topping:{
    name:"default topping",
    price:0,
  },
  pizzaSize: {
    name: ''
  },
  defaultSelected: true
};

export const CUSTOM_TOPPING = {
  pizzaSize: {
    name: "custom pizza"
  },
  topping: {
    name: "onion",
    price: 0.29
  },
  defaultSelected: false
};

export const DEFAULT_PIZZA = {
  name: "default pizza",
  "maxToppings": 0,
  "basePrice": 0,
  "totalPrice": 0,
  toppings:[]
};

export const CUSTOM_PIZZA = {
  name: "custom pizza",
  maxToppings: 1,
  disabledToppings: false,
  basePrice: 1,
  totalPrice: 1,
  toppings: [{
    pizzaSize: {
      name: "custom pizza"
    },
    topping: {
      name: "sausage",
      price: 1.29
    },
    defaultSelected: false
  },{
    pizzaSize: {
      name: "custom pizza"
    },
    topping: {
      name: "onion",
      price: 0.29
    },
    defaultSelected: false
  }]
};

export const PIZZAS = [{
  name: "small",
  maxToppings: 3,
  disabledToppings: false,
  basePrice: 9.89,
  totalPrice: 9.99,
  toppings:[
    {
      pizzaSize: {
        name: "small"
      },
      topping: {
        name: "pepperoni",
        price: 0.4
      },
      defaultSelected: false
    },
    {
      pizzaSize: {
        name: "small"
      },
      topping: {
        name: "bannana peps",
        price: 0.89
      },
      defaultSelected: false
    },
    {
      pizzaSize: {
        name: "small"
      },
      topping: {
        name: "sausage",
        price: 1.29
      },
      defaultSelected: false
    },
    {
      pizzaSize: {
        name: "small"
      },
      topping: {
        name: "onion",
        price: 0.29
      },
      defaultSelected: false
    },
    {
      pizzaSize: {
        name: "small"
      },
      topping: {
        name: "green olives",
        price: 0.39
      },
      defaultSelected: false
    },
    {
      pizzaSize: {
        name: "small"
      },
      topping: {
        name: "cheese",
        price: 0.1
      },
      defaultSelected: true
    },
    {
      pizzaSize: {
        name: "small"
      },
      topping: {
        name: "bell peps",
        price: 0.22
      },
      defaultSelected: false
    }
  ]
  },{
    name: "medium",
    maxToppings: 5,
    disabledToppings: false,
    basePrice: 10.89,
    totalPrice: 11.39,
    toppings: [
      {
        pizzaSize: {
          name: "medium"
        },
        topping: {
          name: "pepperoni",
          price: 0.4
        },
        defaultSelected: true
      },
      {
        pizzaSize: {
          name: "medium"
        },
        topping: {
          name: "bannana peps",
          price: 0.89
        },
        defaultSelected: false
      },
      {
        pizzaSize: {
          name: "medium"
        },
        topping: {
          name: "sausage",
          price: 1.29
        },
        defaultSelected: false
      },
      {
        pizzaSize: {
          name: "medium"
        },
        topping: {
          name: "onion",
          price: 0.29
        },
        defaultSelected: false
      },
      {
        pizzaSize: {
          name: "medium"
        },
        topping: {
          name: "green olives",
          price: 0.39
        },
        defaultSelected: false
      },
      {
        pizzaSize: {
          name: "medium"
        },
        topping: {
          name: "cheese",
          price: 0.1
        },
        defaultSelected: true
      },
      {
        pizzaSize: {
          name: "medium"
        },
        topping: {
          name: "bell peps",
          price: 0.22
        },
        defaultSelected: false
      }
    ]
  },{
    name: "large",
    maxToppings: null,
    disabledToppings: false,
    basePrice: 13.49,
    totalPrice: 13.99,
    toppings: [
      {
        pizzaSize: {
          name: "large"
        },
        topping: {
          name: "pepperoni",
          price: 0.4
        },
        defaultSelected: true
      },
      {
        pizzaSize: {
          name: "large"
        },
        topping: {
          name: "bannana peps",
          price: 0.89
        },
        defaultSelected: false
      },
      {
        pizzaSize: {
          name: "large"
        },
        topping: {
          name: "sausage",
          price: 1.29
        },
        defaultSelected: false
      },
      {
        pizzaSize: {
          name: "large"
        },
        topping: {
          name: "onion",
          price: 0.29
        },
        defaultSelected: false
      },
      {
        pizzaSize: {
          name: "large"
        },
        topping: {
          name: "green olives",
          price: 0.39
        },
        defaultSelected: false
      },
      {
        pizzaSize: {
          name: "large"
        },
        topping: {
          name: "cheese",
          price: 0.1
        },
        defaultSelected: true
      },
      {
        pizzaSize: {
          name: "large"
        },
        topping: {
          name: "bell peps",
          price: 0.22
        },
        defaultSelected: false
      }
    ]
  }
];

export const STORE = {
  cart: {
    totalItems: 0,
    totalCost: 0
  }
};
