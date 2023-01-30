import "./App.css";
import Header from "./containers/Header";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductListing />}></Route>
        <Route
          path="/product/:productId"
          exact
          element={<ProductDetail />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
