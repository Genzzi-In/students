// import Add from "./components/Add"
// import Heading from "./components/Heading"
// import Product from "./components/Product"
// import { ProductsData } from "./data/product.data"
// export default function App(){

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";

//   return (
//     <>
//     <Heading />
//     <Add val={10} a={10} b={20}/>
//     <Add num={10} a={100} b={200} />
//     <Add num={10}  b={200} />
    
//     </>
//   )
// }


// const Add = ()=>{
//   return (
//     <>
//     <h1>Hii</h1>
//     <h1>Hii</h1>
//     </>
//   )
// }

// export default App;

// https://chatgpt.com/share/6a90489a-23fc-83e9-a0d9-


export default function App() {
  return (
    <>
      <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
      
    </>
  )
}


// link -> browser search url tab write a specific path
//  -> after written the Main browserRouter will identify that -> 
// Call the Routes -> and Routes check their register Route 
// -> by their pathname if identified -> check the element 
// ->render to browser
// ->  if anything fail error 
// (white screen appear check console screen)