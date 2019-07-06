import React, { useContext, useEffect } from 'react';

import MainNavigation from '../components/MainNavigation';
import ShopContext from '../context/shop-context';

import './Cart.css';

export default function CartPage () {
  const context = useContext(ShopContext);

  // make this function only run one time when the app is done rendering
  // replace empty array with dependencies that we want
  // to force us to re render
  useEffect(() => {
    console.log("context: ",context);
  }, []);

  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <MainNavigation cartItemNumber={context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)} />
          <main className="cart">
            {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
            <ul>
              {context.cart.map(cartItem => (
                <li key={cartItem.id}>
                  <div>
                    <strong>{cartItem.title}</strong> - ${cartItem.price} (
                    {cartItem.quantity})
                  </div>
                  <div>
                    <button
                      onClick={context.removeProductFromCart.bind(
                        this,
                        cartItem.id
                      )}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};
