import React from 'react';
import { useParams } from "react-router-dom";
import ProductList from '../product-list/Product-list';
import { useEffect, useState } from 'react';
import { sendPostRequest, sendGetRequest } from '../../services/ApiCall'
import { getOrigin, getShoppingCartContent, getCartElementById } from '../../common/Common-functions'

const ShoppingCart = (props) => {
    const params = useParams();
    const [products, setProducts] = useState('')

    const calculateCartPrice = () => {
        const cartContent = getShoppingCartContent();
        let sum = 0;
        products.map(product => {
            const cartElem = getCartElementById(product.id);
            sum = sum + cartElem.amount * product.price;
        })
        return sum;
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
    }, [])

    return (
        <div>
            <div className="container mt-5 mb-5 text-center">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10 d-flex justify-content-center">
                        <div className="col-10 ">
                            <div className="form-inline d-flex justify-content-center">
                                <h4 className="form-boarder form-control mb-3">
                                    {
                                        products ? (
                                            "Twój koszyk"
                                        ) : (
                                            "Twój koszyk jest pusty."
                                        )
                                    }
                                </h4>
                                {
                                    products ? (<></>) : (
                                        <a type="button" href={getOrigin()} 
                                            className="form-boarder form-control mb-3 btn btn-success text-white"> 
                                            Powrót do strony głównej
                                        </a>  
                                    )
                                }  
                                {
                                    products ? (
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
                products ? (
                    <ProductList data={products} />
                ) : (<></>)
            } 
        </div>
    )
}

export default ShoppingCart;
