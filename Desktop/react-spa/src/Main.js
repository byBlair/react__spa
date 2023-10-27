import { BrowserRouter, Route,Routes } from "react-router-dom";
import WishList from './pages/WishList';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import NotFound from './pages/NotFound';
import App from "./components/App";
import Product from './pages/Product';
import Shopping from './pages/Shopping';
import Login from "./pages/Login";
import Aboutus from "./pages/Aboutus";
import Magazine from "./pages/Magazine";
import Brands from "./pages/Brands";
import Gift from "./pages/Gift";
export default function Main(){
  return(
  <BrowserRouter>
  <App>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="list">  
        <Route index element = {<ProductList />} />
        <Route path=":courseSlug" element = {<Product />} />
      </Route>
      <Route path="aboutus" element ={<Aboutus />} />
      <Route path="magazine" element ={<Magazine />} />
      <Route path="Brands" element ={<Brands />} />
      <Route path="gift" element= {<Gift />} />
      <Route path="wishlist" element = {<WishList />} />
      <Route path="shopping" element = {<Shopping />} />
      <Route path="login" element = {<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </App>
  </BrowserRouter>
  )
}