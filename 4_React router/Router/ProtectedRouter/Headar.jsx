import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./index.css";
import { User } from 'react-feather';
import { Button } from 'flowbite-react';

export default function Headar() {
  const navigate=useNavigate();
  return (
    <div className='flex justify-center gap-3 bg-gray-200 w-[100vw] h-10'>
    <div className="flex gap-4 items-center">
    <NavLink to={"home"}>Home</NavLink>
    <NavLink to={"aboute"}>Aboute</NavLink>
    </div>

    <div className="flex gap-3 items-center">
    <NavLink to={"contect"}><User/></NavLink>
    </div>
    <Button className="h-10 w-12" onClick={(e)=>navigate(`/Login`)}>Login</Button>

</div>
  )
}
