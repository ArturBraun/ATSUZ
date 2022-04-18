import React from 'react';
import { useParams } from "react-router-dom";
import ProductList from '../product-list/Product-list';
import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'
import { redirectToErrorPage } from '../../common/Common-functions'

const Category = (props) => {
    const params = useParams();
    const baseUrl = `api/v1/products-by-category?categoryId=${params.categoryId}`
    const urlEndings = {
        'domyslnie': '',
        'nazwaRosnaco': '&sort=name,asc',
        'nazwaMalejaco': '&sort=name,desc',
        'cenaRosnaco': '&sort=price,asc',
        'cenaMalejaco': '&sort=price,desc',
        'czasOczekiwaniaRosnaco': '&sort=deliveryWaitingTime,asc',
        'czasOczekiwaniaMalejaco': '&sort=deliveryWaitingTime,desc',
    }    
    const [url, setUrl] = useState(baseUrl)
    const [products, setProducts] = useState('')
    const [category, setCategory] = useState('')

    const sortItems = (optionValue) => {
        setUrl(baseUrl.concat(urlEndings[optionValue]))
    }

    useEffect( () => {    
      const fetchData = async () => {    
        const dataFromServer = await sendGetRequest(url)
        setProducts(dataFromServer)

        if(dataFromServer.length === 0){
            redirectToErrorPage()
        }
      }
      fetchData()
    }, [url])

    useEffect( () => {    
        const fetchData = async () => {    
          const dataFromServer = await sendGetRequest(`api/v1/category?id=${params.categoryId}`)
          setCategory(dataFromServer)
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
                                    Kategoria {category.name}
                                </h4>
                                <select className="form-boarder form-control mb-3 form-select" onChange={e => sortItems(e.target.value)}>
                                    <option value="domyslnie" selected>Domyślnie</option>
                                    <option value="nazwaRosnaco">Nazwa rosnąco</option>
                                    <option value="nazwaMalejaco">Nazwa malejąco</option>
                                    <option value="cenaRosnaco">Cena rosnąco</option>
                                    <option value="cenaMalejaco">Cena malejąco</option>
                                    <option value="czasOczekiwaniaRosnaco">Czas oczekiwania rosnąco</option>
                                    <option value="czasOczekiwaniaMalejaco">Czas oczekiwania malejąco</option>
                                </select>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductList data={products} />
        </div>
    )
};

export default Category;