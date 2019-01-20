import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import axios from "axios";
import qs from 'qs';
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchPizzas } from '../actions';

const FETCH_PIZZAS_QUERY = `{
  pizzaSizes{
    name
    maxToppings
    basePrice
    toppings{	
      pizzaSize{
        name
      }
      topping{
        name
        price
      }
      defaultSelected
    }
  }
}`;

const configureStore = () => {
  const store = createStore(reducers,{} ,composeWithDevTools(applyMiddleware()));

  const url ='http://core-graphql.dev.waldo.photos';

  axios({
    url: `${url}/pizza`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method:'POST',
    data:qs.stringify({query: FETCH_PIZZAS_QUERY})
  }).then(({data})=>{
    store.dispatch(fetchPizzas(data.data.pizzaSizes));
  });

  return store;
};

export default configureStore;
