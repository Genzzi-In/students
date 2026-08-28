import { ProductsData } from '../data/product.data'
import Product from '../components/Product'
export default function Products() {
  return (
    <>
        <h1>Welcome to Products Page</h1>
        <div className="products">
    {
      ProductsData && ProductsData.length > 0 ?
      ProductsData.map((val,index)=>(
        <Product product={val} key={index}/>
      ))
      :
      <p>No products Found</p>
    }
    </div>
    </>
  )
}
