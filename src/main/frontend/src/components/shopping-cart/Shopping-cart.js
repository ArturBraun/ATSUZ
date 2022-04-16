import React from 'react';
import { useParams } from "react-router-dom";
import ProductList from '../product-list/Product-list';
import { useEffect, useState } from 'react';
import { sendPostRequest, sendGetRequest } from '../../services/ApiCall'
import { 
    getOrigin, 
    getShoppingCartContent, 
    getCartElementById, 
    addToShoppingCart, 
    deleteFromShoppingCart 
} from '../../common/Common-functions'
import Image from '../image/Image';
import loading from '../icons/loading.svg'

const ShoppingCart = (props) => {
    const params = useParams();
    const [products, setProducts] = useState('')
    const [cartEvent, setCartEvent] = useState(false)

    const calculateCartPrice = () => {
        const cartContent = getShoppingCartContent();
        let sum = 0;
        products.map(product => {
            const cartElem = getCartElementById(product.id);
            if(cartElem) sum = sum + cartElem.amount * product.price;
        })
        return sum;
    }

    const addToCart = (productId) => {
        addToShoppingCart(productId)
        setCartEvent(!cartEvent)
    }

    const deleteFromCart = (productId) => {
        deleteFromShoppingCart(productId)
        setCartEvent(!cartEvent)
    }

    useEffect( () => {    
      const fetchData = async () => {
        const cartContent = getShoppingCartContent()
        if(cartContent){
            const idsList = cartContent.map(element => element.productId).join(',')  
            const dataFromServer = await sendGetRequest(`/api/v1/products?ids=${idsList}`)
            setProducts(dataFromServer)
        }        
      }
      fetchData()
    }, [cartEvent])

    return (
        <div>
            <div className="container mt-5 mb-5 text-center">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10 d-flex justify-content-center">
                        <div className="col-10 ">
                            <div className="form-inline d-flex justify-content-center">
                                <h4 className="form-boarder form-control mb-3">
                                    {
                                        products.length > 0 ? (
                                            "Twój koszyk"
                                        ) : (
                                            "Twój koszyk jest pusty."
                                        )
                                    }
                                </h4>
                                {
                                    products.length > 0 ? (<></>) : (
                                        <a type="button" href={getOrigin()} 
                                            className="form-boarder form-control mb-3 btn btn-success text-white"> 
                                            Powrót do strony głównej
                                        </a>  
                                    )
                                }  
                                {
                                    products.length > 0 ? (
                                        <h4 className="form-boarder form-control mb-3">
                                            Sumaryczna wartość koszyka:
                                            <strong>
                                                {` ${calculateCartPrice().toFixed(2)} zł`}
                                            </strong>
                                        </h4>
                                    ) : (<></>)
                                }                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                products.length > 0 ? (
                    <div className="container mt-2 mb-5">
                        <div className="d-flex justify-content-center row">
                            <div className="col-md-10">
                                {
                                    products.map(product => (

                                        <div className="row mt-1 mb-2 p-2 bg-light border rounded" key={product.id}>
                                            <a className="col-md-3 mt-1" href={`/product/${product.id}`}>
                                                <Image imageLink={product.imageId ? `/api/v1/image?id=${product.imageId}` : loading} 
                                                    altText={`Zdjecie produktu ${product.name}`} />
                                            </a>
                                            <div className="align-items-center align-content-center col-md-6 mt-2 ">
                                                <a className="product-link" href={`/product/${product.id}`}>
                                                    <h5>{product.name}</h5>
                                                </a>
                                                <div className="pt-3">
                                                    <p className="text-muted">Ilość dni oczekiwania na dostawę: {product.deliveryWaitingTime}</p>
                                                    <p className="text-truncate">{product.description}</p>
                                                </div>
                                            </div>
                                            <div className="align-items-center align-content-center col-md-3 border-left mt-1 text-center">
                                                <h4 className="m-2">
                                                    {getCartElementById(product.id) ? getCartElementById(product.id).amount : 0} x {product.price.toFixed(2)} zł
                                                </h4>
                                                <div className="d-flex flex-column mt-4">
                                                    <button className="btn btn-success btn-sm" type="button" onClick={() => addToCart(product.id)}>
                                                        Dodaj kolejny
                                                    </button>
                                                    <button className="btn btn-outline-success btn-sm mt-2" type="button" onClick={() => deleteFromCart(product.id)}>
                                                        Usuń jeden
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }                                            
                            </div>
                        </div>
                    </div>
                ) : (<></>)
            } 
        </div>
    )
}

export default ShoppingCart;
