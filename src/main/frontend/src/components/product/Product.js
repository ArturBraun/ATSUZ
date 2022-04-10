import Image from '../image/Image';
import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'
import loading from '../icons/loading.svg'
import './Product.css'

const Product = (props) => {
    const [productData, setProductData] = useState({})

    useEffect( () => {    
        const fetchData = async () => {    
          const dataFromServer = await sendGetRequest(`/api/v1/product?id=${props.id}`)
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
        <div className="card product-card"> 
            <a href={`/productId=${props.id}`}>
                <Image imageLink={productData.imageId ? `/api/v1/image?id=${productData.imageId}` : loading} altText={`Zdjecie produktu ${productData.name}`} />
            </a>
            
            <div className="card-body">
                <a className="card-title product-link" href={`/productId=${props.id}`}>
                    <h5>{productData.name}</h5>
                </a>
                
                <p>{productData.price ? productData.price.toFixed(2) : ' '} zł</p>
                <button className="btn btn-outline-success add-to-cart-btn" type="submit" title="Dodaj do koszyka">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.99219 11H11.9922M13.9922 11H11.9922M11.9922 11V9M11.9922 11V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>      

    )
}

export default Product;
