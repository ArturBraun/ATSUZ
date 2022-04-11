import './Featured-products.css'
import Product from '../product/Product';
import { useEffect, useState } from 'react';
import { sendGetRequest } from '../../services/ApiCall'

const FeaturedProducts = () => {
    const [featuredProductsIds, setFeaturedProductsIds] = useState({})

    useEffect( () => {    
      const fetchData = async () => {    
        const dataFromServer = await sendGetRequest('api/v1/featured-products')
        setFeaturedProductsIds(dataFromServer)
      }
      fetchData()
    }, [])

    return (
        <div className="card featured-product border-3">
            <h5 className="d-flex justify-content-center header-text">Polecane produkty</h5>
            <div className="card-body">
                <div className="container bg-trasparent p-3" >
                    <div className="row row-cols-3 gx-5">

                        {
                            featuredProductsIds.length > 0 ? (
                                featuredProductsIds.map(product => (
                                    <div className="col" key={product.id}>
                                        <Product key={product.id} id={product.id} productData={product} />
                                    </div>
                                ))  
                            ) : (<> </>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>        

    )
}

export default FeaturedProducts;
