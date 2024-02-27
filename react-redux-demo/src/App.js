import logo from './logo.svg';
import './App.css';
import Counter from './Redux/Counter';
import ProductsTable from './Redux/shoppingCart/products/ProductsTable';
import Cart from './Redux/shoppingCart/cart/CartTable';



// import Counter from './Components/useReducer/Counter';
// import { AppProvider } from './reducers/AppContext';
// import ProductList from './reducers/ProductList';
// import Cart from './reducers/Cart';






function App() {
  return (
    <div className="App">
      <ProductsTable />
      <Cart />
      {/* <Counter /> */}
      {/* <header className="App-header">
        <AppProvider>
          <ProductList />
          <Cart />
        </AppProvider>
      </header> */}
    </div>
  );
}

export default App;
