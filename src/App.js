import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="product/:productId" element={<ProductDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
