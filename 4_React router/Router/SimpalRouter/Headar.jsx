import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css";

export default function Headar() {
  return (
    <div>
        <div className="flex gap-4">
        <NavLink to={"home"}>Home</NavLink>
        <NavLink to={"contect"}>Contect</NavLink>
        <NavLink to={"aboute"}>Aboute</NavLink>
        </div>
    </div>
  )
}
