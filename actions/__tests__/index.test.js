import React from 'react';
import expect from 'expect';
import { addToCart, removeFromCart, fetchPizzas, toggleTopping} from '../../actions';
import { PIZZAS, CUSTOM_PIZZA} from '../../__mocks__';
import deepFreeze from "deep-freeze";

describe('Actions', () => {
  it('should create an action to fetch pizzas', () => {
    const pizzas = PIZZAS;
    const expectedAction = {
      type: 'FETCH_PIZZAS',
      pizzas: PIZZAS
    };

    deepFreeze(pizzas);

    expect(fetchPizzas(pizzas)).toEqual(expectedAction);
  });

  it('should create an action to add pizzas to cart', () => {
    const expectedAction = {
      type: 'ADD_TO_CART',
      pizza: CUSTOM_PIZZA
    };

    deepFreeze(CUSTOM_PIZZA);

    expect(addToCart(CUSTOM_PIZZA)).toEqual(expectedAction);
  });

  it('should create an action to remove pizza from cart', () => {
    const id = 0;
    const expectedAction = {
      type: 'REMOVE_FROM_CART',
      id
    };

    deepFreeze(id);

    expect(removeFromCart(id)).toEqual(expectedAction);
  });

  it('should create an action to toggle topping from pizza', () => {
    const topping = 'topping';
    const expectedAction = {
      type: 'TOGGLE_TOPPING_FROM_PIZZA',
      topping,
    };

    deepFreeze(topping);

    expect(toggleTopping(topping)).toEqual(expectedAction);
  });
});
