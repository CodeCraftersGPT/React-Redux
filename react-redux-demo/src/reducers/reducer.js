const initialState = {
    // inflate the state with the products and cart
    products: [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            },
            {
            id: 2,
            name: 'Product 2',
            price: 200,
            },
            {
            id: 3,
            name: 'Product 3',
            price: 300,
            },
            {
            id: 4,
            name: 'Product 4',
            price: 400,
            },
            {
            id: 5,
            name: 'Product 5',
            price: 500,
            },


    ],
    cart: [
        // add the products to the cart
        { id: 1, quantity: 5 },
        { id: 2, quantity: 3 },
        { id: 5, quantity: 1 },
    ],
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case 'LOAD_PRODUCTS':
        return { ...state, products: action.payload };
      case 'ADD_TO_CART':
        // payload is the product id cart contain the product id and quantity
        // if the product is already in the cart, increment the quantity
        // otherwise, add the product to the cart
        if (state.cart.find((itemId) => itemId.id === action.payload)) {
          return {
            ...state,           
            cart: state.cart.map((itemId) =>
              itemId.id === action.payload
                ? { id: itemId.id, quantity: itemId.quantity + 1 }
                : itemId
            ),
          };
        }
        return { ...state, cart: [...state.cart, {id:action.payload,quantity:1}] };
      case 'REMOVE_FROM_CART':
        // payload is the product id
        // if the cart contains the product, see if the quantity is greater than 1
        // if the quantity is greater than 1, decrement the quantity
        // otherwise, remove the product from the cart
        if (state.cart.find((itemId) => itemId.id === action.payload)) {
          return {
            ...state,
            cart: state.cart.map((itemId) =>
              itemId.id === action.payload
                ? { id: itemId.id, quantity: itemId.quantity - 1 }
                : itemId
            ),
          };
        }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  
  export default reducer;
  export { initialState };
  