// define produt list component
// import app context and access the state and dispatch
// from state, access the products and map through them
// for each product, display the name and price
// for each product, display a button to add to cart

 import React, { useContext } from 'react';

    import { AppContext } from './AppContext';

    function ProductList() {
    const { state, dispatch } = useContext(AppContext);
    const { products } = state;

    return (
        <div>
        <h2>Products</h2>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            <button
                                onClick={() =>
                                    dispatch({ type: 'ADD_TO_CART', payload: product.id })
                                }
                            >
                                Add to Cart
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
    }

    export default ProductList;

