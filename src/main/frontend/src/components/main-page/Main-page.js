import React from 'react';
import './Main-page.css'
import FeaturedProducts from '../featured-products/Featured-products';

const MainPage = (props) => {

    return (
        <div>
            <header className="App-header">
                <p className="description">
                    Prosty opis sklepu elektronicznego
                </p>
            </header>
            <div>
                <FeaturedProducts />
            </div>
        </div>
    )
};

export default MainPage;