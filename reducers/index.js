import { combineReducers } from 'redux';
import pizzas from './pizzas';
import cart from './cart';

export default combineReducers({pizzas, cart});
