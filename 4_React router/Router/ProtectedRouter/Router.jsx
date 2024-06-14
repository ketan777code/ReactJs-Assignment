import React from 'react'
import Home from './Home'
import Aboute from './Aboute'
import Contect from './Profile'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Headar from './Headar';
import  {Login}  from './Login';
import AuthRouter from './AuthRouter';


export default function Router() {
  return (
    <div>
        <BrowserRouter>
      <Headar />
      <Routes>
          <Route path="/" element={<AuthRouter component={<Home/>} />}/>
          <Route path="/aboute" element={<Aboute />}/>
          <Route path="/contect" element={<Contect />}/>
          <Route path="/login" element={<Login /> }/>
      </Routes>
      </BrowserRouter>
      
    
    </div>

  );
}
