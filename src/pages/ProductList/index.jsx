import { useContext } from "react"
import { primaryContext } from "../../context/PrimaryContext"
import './index.css'
import Card from "../../components/Card";


const ProductList = () => {
    // WE NEED THAT PRODUCT ARRAY HERE!

const { products } = useContext(primaryContext);
  return (
    <div className="product-list">
      <h1>Product List Page</h1>
        {
            products.map((eachProduct) => {
                return <Card key={eachProduct.id} productData={eachProduct} />
            })
        }
    </div>
  )
}

export default ProductList