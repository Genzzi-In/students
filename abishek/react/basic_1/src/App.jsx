import Add from "./components/Add"
import Heading from "./components/Heading"
import Product from "./components/Product"
export default function App(){
  const product = {
  id: 1,
  name: "iPhone 16 Pro",
  description: "A powerful smartphone with a titanium design.",
  price: 999,
  currency: "USD",
  image: "https://imgs.search.brave.com/FIjd3bayZPT91c2Ur2Lt7EzBr2yOmn98j2F6IH-MXb4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnV0dXJld29ybGRp/bmRpYS5pbi9tZWRp/YS9jYXRhbG9nL3By/b2R1Y3QvY2FjaGUv/Mjc2NTU0MjUwNTY2/MGJhYWIyOGVjZDU1/NWUyNzM2NmUvaS9w/L2lwaG9uZV8xNmVf/d2hpdGVfcGRwX2lt/YWdlX3Bvc2l0aW9u/XzFfX2VuLWluXzIu/anBn",
  category: "Smartphones",
  rating: 4.8,
  stock: 25,
};
const product2 = {
  id: 2,
  name: "iPhone 15 Pro",
  description: "A powerful smartphone with a titanium design.",
  price: 899,
  currency: "USD",
  image: "https://example.com/iphone.jpg",
  category: "Smartphones",
  rating: 4.8,
  stock: 15,
};

const product3 = {
  id: 3,
  name: "iPhone 17 Pro",
  description: "A powerful smartphone with a titanium design.",
  price: 899,
  currency: "USD",
  image: "https://example.com/iphone.jpg",
  category: "Smartphones",
  rating: 4.8,
  stock: 5,
};
  return (
    <>
    <Heading />
    <Add val={10} a={10} b={20}/>
    <Add num={10} a={100} b={200} />
    <Add num={10}  b={200} />
    <div className="products">
      <Product product={product}/>
    <Product product={product2}/>
    <Product product={product3}/>
    </div>
    {/* <Product />
    <Product />
    <Product /> */}
    </>
  )
}


// const Add = ()=>{
//   return (
//     <>
//     <h1>Hii</h1>
//     <h1>Hii</h1>
//     </>
//   )
// }

// export default App;

// https://chatgpt.com/share/6a90489a-23fc-83e9-a0d9-101c460e86e9