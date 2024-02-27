import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItems } from './cartSlice';
import { selectProducts } from '../products/productSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProducts);

  // Convert cartItems object into an array for easy mapping
  const cartProducts = Object.keys(cartItems).map((productId) => {
    const product = products.find(product => product.id === parseInt(productId));
    return {
      ...product,
      quantity: cartItems[productId],
    };
  });

  return (
    <div className="center">
      <h2>Your Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => dispatch(removeFromCart(product.id))}>Remove from Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
