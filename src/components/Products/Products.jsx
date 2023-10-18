import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const {products} = useLoaderData()
    return (
        <div className="mt-6 grid md:grid-cols-3 gap-6">
            {
                products.map(product => <Product product = {product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Products;