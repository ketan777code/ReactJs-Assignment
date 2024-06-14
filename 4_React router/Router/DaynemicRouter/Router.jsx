import React from 'react'
import Home from './Home'
import Aboute from './Aboute'
import Contect from './ProductPage'
import {BrowserRouter,Routes,Route,element} from "react-router-dom";
import Error404 from './Error404'
import Headar from './Headar';
import ProductPage from './ProductPage';


export default function Router() {
  return (
    <div>
      <BrowserRouter>
        {/* <div className="flex gap-4">
        <Link to={"home"}>Home</Link>
        <Link to={"contect"}>Contect</Link>
        <Link to={"aboute"}>Aboute</Link>
      </div> */}
      <Headar />
      <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/aboute" element={<Aboute />}/>
          <Route path="/product/:id" element={<ProductPage />}/>
          <Route path="*" element={<Error404 />}/>
      </Routes>
      </BrowserRouter>
      
    
    </div>

  )
}
