// External Libraries
import axios from "axios";

// Internal Libraries
import { useEffect, useState } from "react";
import { ProductsPage } from "./pages/ProductsPage";
import { Footer } from "./layout/Footer";

import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { Route, Switch } from "react-router-dom";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { Header } from "./layout/Header";

// Stylingler
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [productList, setProductList] = useState([]);

  // sipariş state

  useEffect(() => {
    // todo: axios get req ile products datasını çek
    console.warn("***** UYGULAMA BAŞARIYLA YÜKLENDİ! *****");
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.error("REQ HATA İlE SONUÇLANDI: ", err);
      })
      .finally(() => {
        console.warn("REQUEST SONLANDI!");
      });
  }, []);

  // JSX : Java Script Expression
  return (
    <div className="main">
      <Header />
      <div className="page-content">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/counter" exact>
            <CounterPage />
          </Route>
          <Route path="/products" exact>
            <ProductsPage productList={productList} exact />
          </Route>
          <Route path="/product/detail/:productId" exact>
            <ProductDetailPage exact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
