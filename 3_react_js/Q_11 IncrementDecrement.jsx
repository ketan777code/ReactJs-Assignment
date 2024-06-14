import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function IncrementDecrement() {
    let [count,setcount]=useState(0)
    const incrementHandler = ()=>{
        setcount(count + 1)
    }
    const decrementHandler =()=>{
       setcount (count - 1)
    }
    const resetHandler = ()=>{
       setcount(0)
    }
  return (
      <div style={{marginLeft:"400px"}}>

    <div>
         <h2>Counter : {count}</h2>
        <Button  className=' me-3'color='warning' onClick={incrementHandler}>Increament</Button>
        <Button className=' me-3' color='success' onClick={decrementHandler}>Decreament</Button>
        <Button className=' me-3' color='danger' onClick={resetHandler}>Reset</Button>
    </div>
      </div>
  )
}
