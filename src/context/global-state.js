import React, { Component } from 'react';

import ShopContext from './shop-context';

export default class GlobalState extends Component {

  state = {
    products: [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: [],
    cartSum: 0
  };

  addProductToCart = product => {
    console.log("adding product", product);
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({cart: updatedCart});
  }; 

  removeProductFromCart = productId => {
    console.log("removing product", productId)
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({cart: updatedCart});
  };

  render() {
    return (
      <ShopContext.Provider value={{
        products: this.state.products,
        cart: this.state.cart,
        addProductToCart: this.addProductToCart,
        removeProductFromCart: this.removeProductFromCart
      }}>
        { this.props.children }
      </ShopContext.Provider>
    )
  }
}