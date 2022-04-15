import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'
import { useParams } from "react-router-dom";
import './Product-details.css'

const ProductDetails = (props) => {
    const [productData, setProductData] = useState('')
    const params = useParams();

    useEffect( () => {    
        const fetchData = async () => {    
          const dataFromServer = await sendGetRequest(`/api/v1/product?id=${params.productId}`)
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
        <div>
            {JSON.stringify(productData)}
        </div>
    )
}

export default ProductDetails;
