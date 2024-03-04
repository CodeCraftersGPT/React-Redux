import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';


function ProductsTable() {
  //const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products); // Adjust based on your state structure
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Handle loading and error states as needed
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  
  

  return (
    <div className="center">
        <h2>Products</h2>
    
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>${product.price}</td>
           {/* add button and implement the code to add items to the cart */}
            <td><button onClick={() => dispatch(addToCart(product.id))}>Add to Cart</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ProductsTable;
