import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { sendGetRequest } from './services/ApiCall'
import Header from './components/header/Header'
import FeaturedProducts from './components/featured-products/Featured-products';

function App() {
  const [data, setData] = useState({})

  useEffect( () => {    
    const fetchData = async () => {    
      const dataFromServer = await sendGetRequest('api/v1/message')
      setData(dataFromServer)
    }
    fetchData()
  }, [])

  console.log(JSON.stringify(data))

  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Simple change. {data.message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <FeaturedProducts />
      </div>
    </div>
  );
}

export default App;
