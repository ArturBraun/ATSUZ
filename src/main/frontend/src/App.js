import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import LayoutWrapper from './components/layout-wrapper/Layout-wrapper';
import MainPage from './components/main-page/Main-page';
import Category from './components/category/Category';
import PageNotFound from './components/page-not-found/Page-not-found';
import OrderSearch from './components/order-search/Order-search';
import ProductDetails from './components/product-details/Product-details';
import ShoppingCart from './components/shopping-cart/Shopping-cart';
import SearchResults from './components/search-results/Search-results';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <LayoutWrapper children={<MainPage />} />
          } 
        />
        <Route path="/category/:categoryId" element={
          <LayoutWrapper children={<Category />} />
          } 
        />
        <Route path="/order-search" element={
          <LayoutWrapper children={<OrderSearch />} />
          } 
        />
        <Route path="/product/:productId" element={
          <LayoutWrapper children={<ProductDetails />} />
          } 
        />
        <Route path="/cart" element={
          <LayoutWrapper children={<ShoppingCart isConst={false}/>} />
          } 
        />
        <Route path="/search/:searchQuery" element={
          <LayoutWrapper children={<SearchResults />} />
          } 
        />
        
        <Route path="*" element={
          <LayoutWrapper children={<PageNotFound />} />
          } 
        />

      </Routes>
    </BrowserRouter>

  );
  
}

export default App;
