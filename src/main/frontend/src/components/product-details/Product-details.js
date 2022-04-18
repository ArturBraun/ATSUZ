import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'
import { useParams } from "react-router-dom";
import './Product-details.css'
import Image from '../image/Image';
import loading from '../icons/loading.svg'
import { addToShoppingCart } from '../../common/Common-functions'
import QuickMessage from '../quick-message/Quick-message';

const ProductDetails = (props) => {
    const [productData, setProductData] = useState('')
    const params = useParams();
    const addToCart = () => {
        const productIdInt = parseInt(params.productId);
        if(Number.isInteger(productIdInt)){
            addToShoppingCart(productIdInt);
        }        
    } 

    useEffect( () => {    
        const fetchData = async () => {    
          const dataFromServer = await sendGetRequest(`api/v1/product?id=${params.productId}`)
          setProductData(dataFromServer)
        }

        if('productData' in props){
            setProductData(props.productData)
        }
        else{
            fetchData()
        }

      }, [props])

    return (
        <>
            <section className="bg-white text-dark pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center align-content-center d-flex">
                        <div className="col-md-6 col-12 mx-auto justify-content-center align-content-center d-md-flex flex-column">
                            <h2 className="mb-3 mt-3">{productData.name}</h2>
                            <p className="text-h3 lead">{productData.description}</p>
                            <h4 className="mb-3 mt-3">Nasza ocena</h4>
                            <div className="progress mb-3 mt-2">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: `${productData.productionQuality}%`}}>
                                    <span className="stacked-label">jakość wykonania</span>
                                </div>
                            </div>
                            <div className="progress mb-3 mt-2">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: `${productData.appearance}%`}}>
                                    <span className="stacked-label">wygląd</span>
                                </div>
                            </div>
                            <div className="progress mb-3 mt-2">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: `${productData.reliability}%`}}>
                                    <span className="stacked-label">niezwodność</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mx-auto">
                            <div className="card">
                                <Image imageLink={productData.imageId ? `api/v1/image?id=${productData.imageId}` : loading} altText={`Zdjecie produktu ${productData.name}`} />
                                <div className="card-body text-center">
                                    <h4 className="card-title">{productData ? productData.price.toFixed(2) : ''} zł</h4>
                                    <p className="card-text text-muted">Ilość dni oczekiwania na dostawę: {productData.deliveryWaitingTime}</p>
                                    <p className="mt-4">
                                        <button className="btn btn-outline-success add-to-cart" type="button" onClick={addToCart} 
                                            data-bs-toggle="modal" data-bs-target="#add-to-cart-modal">
                                            Dodaj do koszyka
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <QuickMessage id="add-to-cart-modal"/>            
        </>
    )
}

export default ProductDetails;
