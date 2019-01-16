import React from 'react';
import expect from 'expect';
import { addToCart, removeFromCart } from '../../actions';

describe('Actions', () => {
  it('should create an action to add pizzas to cart', () => {
    const pizzaSize = 'SMALL';
    const expectedAction = {
      type: 'ADD_TO_CART',
      pizzaSize
    };
    expect(addToCart(pizzaSize)).toEqual(expectedAction);
  });

  it('should create an action to remove pizza from cart', () => {
    const id = 0;
    const expectedAction = {
      type: 'REMOVE_FROM_CART',
      id
    };
    expect(removeFromCart(id)).toEqual(expectedAction);
  });
});
