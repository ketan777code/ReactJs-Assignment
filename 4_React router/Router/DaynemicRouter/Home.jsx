import axios from 'axios';
import  {React, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CardPage } from './CardPage';


export default function Home() {
  let[product,setproduct]=useState([]);
useEffect(()=>{
  async function TakeData(params) {
    
    try {
      
      let Response= await axios.get("https://fakestoreapi.com/products")
      console.log("🚀 ~ useEffect ~ Response:", Response.data);
      setproduct(Response.data);
      
    } catch (error) {
      toast.error("Somthig is Wrongs");
      
    }
  }
  TakeData();
},[]);
  return (
    
    <div className="row p-3 ">
      
    {
      product.map((e,i)=>{
        return <div className='col-3 my-3'>

          <CardPage data={e} />
        </div>
        })
    }
    
    </div>
  )
}
