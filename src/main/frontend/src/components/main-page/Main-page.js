import React from 'react';
import './Main-page.css'
import FeaturedProducts from '../featured-products/Featured-products';

const MainPage = (props) => {

    return (
        <div>
            <header className="App-header">
                <div className="landing-text">
                    <p className="fs-2">Witamy w naszym sklepie internetowym!</p>
                    <p className="fs-5 description">Prosimy o zapoznanie się z naszą urozmaiconą ofertą, poprzez wybór odpowiedniej kategorii na górze strony lub poprzez wyszukanie interesującego produktu. Zachęcamy również do zapoznania się z poniżej polecanymi przez nas produktami!</p>
                </div>
                <a href="#featured-products" className="btn btn-success btn-lg" role="button">Polecane produkty</a>

            </header>
            <div id="featured-products">
                <FeaturedProducts/>
            </div>
        </div>
    )
};

export default MainPage;