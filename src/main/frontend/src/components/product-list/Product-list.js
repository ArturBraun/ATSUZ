import React from 'react';
import './Product-list.css'
import Image from '../image/Image';
import loading from '../icons/loading.svg'
import { addToShoppingCart } from '../../common/Common-functions'
import QuickMessage from '../quick-message/Quick-message';

const ProductList = (props) => {
    const addToCart = (productId) => {
        addToShoppingCart(productId)
    }

    return (
        <div className="container mt-2 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10">

                    {props.data.length > 0 ? (
                            props.data.map(product => (

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
                                        <h4 className="m-2">{product.price.toFixed(2)} zł</h4>
                                        <div className="d-flex flex-column mt-4">
                                            <a className="btn btn-success btn-sm" type="button" href={`/product/${product.id}`}>Więcej informacji</a>
                                            <button className="btn btn-outline-success btn-sm mt-2" type="button" onClick={() => addToCart(product.id)}
                                                data-bs-toggle="modal" data-bs-target="#add-to-cart-modal">
                                                Dodaj do koszyka
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            ))
                        ) : ('Brak produktów do pokazania')
                    }

                    <QuickMessage id="add-to-cart-modal"/> 
                                
                </div>
            </div>
        </div>

    )
};

export default ProductList;