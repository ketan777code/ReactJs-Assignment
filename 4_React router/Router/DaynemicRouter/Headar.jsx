import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css";

export default function Headar() {
  return (
    <div className='flex justify-center gap-3 bg-gray-200 w-[100vw] h-10'>
        <div className="flex gap-4">
        <NavLink to={"home"}>Home</NavLink>
        {/* <NavLink to={"contect"}>Contect</NavLink>
        <NavLink to={"aboute"}>Aboute</NavLink> */}
        </div>
    </div>
  )
}
