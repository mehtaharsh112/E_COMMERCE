import React from "react";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductListing/>} />
          <Route path='/product/:productId' element={<ProductDetail/>} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
