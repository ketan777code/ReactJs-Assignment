import React from 'react';
import { Button } from 'flowbite-react';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Error404() {
    const Navigate=useNavigate();
  return <div className="flex justify-center items-center flex-col h-[100vh]">
  <h1>Error 404</h1>
    <Button onClick={()=>Navigate("/home")}>Back To Home</Button>
    <Button onClick={()=>Navigate(-1)}>Back</Button>
  </div> 


}
 