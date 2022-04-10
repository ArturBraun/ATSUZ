import React from 'react';
import './Main-page.css'
import logo from '../icons/logo.svg';
import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'
import FeaturedProducts from '../featured-products/Featured-products';

const MainPage = (props) => {
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
        <div>
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
    )
};

export default MainPage;