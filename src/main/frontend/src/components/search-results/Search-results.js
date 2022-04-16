import React from 'react';
import { useParams } from "react-router-dom";
import ProductList from '../product-list/Product-list';
import { useEffect, useState } from 'react';
import { sendPostRequest } from '../../services/ApiCall'
import { getOrigin } from '../../common/Common-functions'

const SearchResults = (props) => {
    const params = useParams();
    const [products, setProducts] = useState('')

    useEffect( () => {    
      const fetchData = async () => {    
        const dataFromServer = await sendPostRequest('/api/v1/search', {searchText: params.searchQuery})
        setProducts(dataFromServer)

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
                                        products.length > 0 ? (
                                            `Wyniki wyszukiwania dla - "${params.searchQuery}"`
                                        ) : (
                                            `Brak wyników wyszukiwania dla - "${params.searchQuery}"`
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                products.length > 0 ? (
                    <ProductList data={products} />
                ) : (<></>)
            } 
        </div>
    )
};

export default SearchResults;