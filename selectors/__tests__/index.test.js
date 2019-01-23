import React from 'react';
import expect from 'expect';
import { getTotalItems, getTotalCost, getPizzas, getCartItems } from '../../selectors';
import { PIZZAS, STORE } from '../../__mocks__';

describe('Selectors', () => {
  it('getTotalItems should get totalItems from the store property cart', () => {
    let totalItems = getTotalItems(STORE);
    expect(totalItems).toEqual(0);
  });

  it('getTotalCost should get totalCost from the store property cart', () => {
    let totalCost = getTotalCost(STORE);
    expect(totalCost).toEqual(0);
  });

  it('getCartItems should get items from the store property cart', () => {
    let cartItems = getCartItems(STORE);
    expect(cartItems).toEqual(PIZZAS);
  });

  it('getPizzas should get pizzas from the store property pizzas', () => {
    let pizzas = getPizzas(STORE);
    expect(pizzas).toEqual(PIZZAS);
  });
});
