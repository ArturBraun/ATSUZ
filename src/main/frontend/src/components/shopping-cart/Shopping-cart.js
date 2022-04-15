import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'
import { useParams } from "react-router-dom";
import './Shopping-cart.css'
import Image from '../image/Image';
import loading from '../icons/loading.svg'
import { getShoppingCartContent } from '../../common/Common-functions'

const ShoppingCart = (props) => {
    const [productData, setProductData] = useState('')
    const params = useParams();
    const cartContent = getShoppingCartContent()

    // useEffect( () => {    
    //     const fetchData = async () => {    
    //       const dataFromServer = await sendGetRequest(`/api/v1/product?id=${params.productId}`)
    //       setProductData(dataFromServer)
    //     }

    //     if('productData' in props){
    //         setProductData(props.productData)
    //     }
    //     else{
    //         fetchData()
    //     }

    //   }, [props])

    return (
        <div> 
            {JSON.stringify(cartContent)}
        </div>
    )
}

export default ShoppingCart;
