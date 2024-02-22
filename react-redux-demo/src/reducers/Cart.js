// define cart component
// import app context and access the state and dispatch
// from state, access the cart and map through them
// for each product, display the name, price, and quantity
// for each product, display a button to remove from cart

import React, { useContext } from 'react';

import { AppContext } from './AppContext';

function Cart() {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  // the cart contains the product id and quantity
    // we need to access the product details from the products state
    // to display the product name and price
    // we can use the product id to find the product details
    // we can use the product id to remove the product from the cart
    
    return (
        <div>
    <h2>Cart</h2>
    <table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item) => {
                const product = state.products.find((p) => p.id === item.id);
                return (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button
                                onClick={() =>
                                    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                                }
                            >
                                Remove
                            </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>
    );
}

export default Cart;
