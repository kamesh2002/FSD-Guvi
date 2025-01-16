import React from "react";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductList />
      <CartPage/>
      
    </div>
  );
};

export default App;
