import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
        
        <Route path="*" element={
          <LayoutWrapper children={<PageNotFound />} />
          } 
        />

      </Routes>
    </BrowserRouter>

  );
  
}

export default App;
