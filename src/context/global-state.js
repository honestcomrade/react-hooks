import React, { useReducer } from 'react';

import ShopContext from './shop-context';

import { ADD_PRODUCT, REMOVE_PRODUCT, shopReducer } from '../reducers/reducers';

export default function GlobalState (props) {
  
  const [ cartState, dispatchCartAction ] = useReducer(shopReducer, {cart: []})
  
  const products = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ];

  const addProductToCart = product => {
    console.log("dispatching action", ADD_PRODUCT);
    dispatchCartAction(
      {
        type: ADD_PRODUCT, 
        product
      }
    );
  };

  const removeProductFromCart = productId => {
    console.log("dispatching action", REMOVE_PRODUCT);
    dispatchCartAction(
      {
        type: REMOVE_PRODUCT, 
        productId
      }
    );
  };

  return (
    <ShopContext.Provider value={{
      products,
      cart: cartState.cart,
      addProductToCart,
      removeProductFromCart
    }}>
      { props.children }
    </ShopContext.Provider>
  )
};
