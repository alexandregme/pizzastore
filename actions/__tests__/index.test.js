import React from 'react';
import expect from 'expect';
import { addToCart, removeFromCart } from '../../actions';
import { CUSTOM_PIZZA } from '../../__mocks__';

describe('Actions', () => {
  it('should create an action to add pizzas to cart', () => {
    const expectedAction = {
      type: 'ADD_TO_CART',
      pizza: CUSTOM_PIZZA
    };
    expect(addToCart(CUSTOM_PIZZA)).toEqual(expectedAction);
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
