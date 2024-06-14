import React from 'react'
import Home from './Home'
import Aboute from './Aboute'
import Contect from './Contect'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Error404 from './Error404'
import Headar from './Headar';

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
          <Route path="/contect" element={<Contect />}/>
          <Route path="*" element={<Error404 />}/>
      </Routes>
      </BrowserRouter>
      
    
    </div>

  )
}
