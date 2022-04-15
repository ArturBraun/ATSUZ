import React from 'react';
import { useParams } from "react-router-dom";
import ProductList from '../product-list/Product-list';
import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'

const Category = (props) => {
    const params = useParams();
    const [url, setUrl] = useState(`/api/v1/products-by-category?categoryId=${params.categoryId}`)
    const [products, setProducts] = useState('')

    useEffect( () => {    
      const fetchData = async () => {    
        const dataFromServer = await sendGetRequest(url)
        setProducts(dataFromServer)
      }
      fetchData()
    }, [])

    return (
        <div>
            <p>Category id = {params.categoryId}</p>
            <ProductList data={products} />
        </div>
    )
};

export default Category;