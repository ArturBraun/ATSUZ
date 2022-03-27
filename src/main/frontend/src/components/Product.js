import Image from './Image';
import { useEffect, useState } from 'react';
import { sendGetRequest } from '../services/ApiCall'
import addToCart from './icons/add-to-cart.svg'

const Product = (props) => {
    const [productData, setProductData] = useState({})

    useEffect( () => {    
      const fetchData = async () => {    
        const dataFromServer = await sendGetRequest(`/api/v1/product?id=${props.productId}`)
        setProductData(dataFromServer)
      }
      fetchData()
    }, [])
  
    console.log(JSON.stringify(productData))

    return (
        <div className="card h-100 shadow-sm"> 
            <Image imageLink={productData.imageId ? `/api/v1/image?id=${productData.imageId}` : '/icons/electronics.svg'} altText={`Zdjecie produktu ${productData.name}`}/>
            <div className="card-body">
                <h5 className="card-title">{productData.name}</h5>
                <p>{productData.price ? productData.price.toFixed(2) : ' '} zł</p>
                <button className="btn btn-outline-success add-to-cart-btn" type="submit" title="Dodaj do koszyka">
                    <img src={addToCart} alt="Dodanie produktu do koszyka" width="30" height="24" className="d-inline-block align-text-top" />
                </button>
            </div>
        </div>      

    )
}

export default Product;
