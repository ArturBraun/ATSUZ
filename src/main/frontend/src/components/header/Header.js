import electronics from '../icons/electronics.svg'
import shoppingCart from '../icons/shopping-cart.svg'
import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'
import './Header.css'

const Header = () => {
    const [categories, setCategories] = useState({})

    useEffect( () => {    
      const fetchData = async () => {    
        const dataFromServer = await sendGetRequest('api/v1/get-all-categories')
        setCategories(dataFromServer)
      }
      fetchData()
    }, [])

    console.log(JSON.stringify(categories))

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={electronics} alt="Electronics shop logo" width="30" height="24" className="d-inline-block align-text-top" />
                Electronics shop
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {categories.length > 0 ? (
                                categories.map(category => (
                                    <li><a className="dropdown-item" href={`/categoryId=${category.id}`}> {category.name} </a></li>
                                ))
                            ) : ('No categories to show')
                        }
                    </ul>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                <a className="navbar-brand shopping-cart" href="/">
                    <img src={shoppingCart} alt="Shopping cart logo link" width="30" height="24" className="d-inline-block align-text-top" />
                </a>
            </form>
            </div>
        </div>
        </nav>
    )
}

export default Header;
