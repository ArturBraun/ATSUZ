import './Featured-products.css'
import Product from '../product/Product';

const FeaturedProducts = () => {
    const featuredProductsIds = [2,3];

    return (
        <div class="card">
            <h5 class="card-header">Polecane produkty</h5>
            <div class="card-body">
                <div className="container-fluid bg-trasparent p-5" >
                    <div className="row row-cols-2 gx-5">
                        <div className="col">
                            <Product productId={featuredProductsIds[0]} />
                        </div>
                        <div className="col">
                            <Product productId={featuredProductsIds[1]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>        

    )
}

export default FeaturedProducts;
