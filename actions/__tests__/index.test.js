import React from 'react';
import expect from 'expect';
import { addToCart } from '../../actions';

describe('Actions', () => {
  it('should create an action to pizzas to add cart', () => {
    const pizzaSize = 'SMALL';
    const expectedAction = {
      type: 'ADD_TO_CART',
      pizzaSize
    };
    expect(addToCart(pizzaSize)).toEqual(expectedAction);
  });
});
