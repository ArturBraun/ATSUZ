import electronics from '../icons/electronics.svg'
import shoppingCart from '../icons/shopping-cart.svg'
import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'
import './Header.css'
import { getOrigin } from '../../common/Common-functions'

const Header = () => {
    const [categories, setCategories] = useState('')
    const [inputSearchQuery, setInputSearchQuery] = useState('')

    useEffect( () => {    
      const fetchData = async () => {    
        const dataFromServer = await sendGetRequest('api/v1/categories')
        setCategories(dataFromServer)
      }
      fetchData()
    }, [])

    const performSearch = () => {
        if(inputSearchQuery){
            let searchStr = inputSearchQuery.trim()
            window.location.href = `${window.location.origin.toString()}/search/${searchStr}`
        }        
    }

    return (
        // navbar -> fixed-top
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={electronics} alt="Logo sklepu elektronicznego" width="30" height="24" className="d-inline-block align-text-top" />
                Sklep elektroniczny
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Strona główna</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kategorie
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {categories.length > 0 ? (
                                categories.map(category => (
                                    <li key={category.id}><a className="dropdown-item" href={`${getOrigin()}/category/${category.id}`}> {category.name} </a></li>
                                ))
                            ) : ('Brak kategorii do pokazania')
                        }
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/order-search">Zamówienia</a>
                </li>
            </ul>
            <div className="d-flex">
                <input className="form-boarder form-control me-2" type="search" placeholder="Szukaj" aria-label="Search" 
                    onChange={e => setInputSearchQuery(e.target.value)}/>
                <button className="btn btn-outline-success search-btn" type="submit" onClick={performSearch}>Szukaj</button>
                <a className="navbar-brand shopping-cart" href="/cart">
                    <img src={shoppingCart} alt="Logo koszyka link" width="30" height="24" className="d-inline-block align-text-top" />
                </a>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Header;
