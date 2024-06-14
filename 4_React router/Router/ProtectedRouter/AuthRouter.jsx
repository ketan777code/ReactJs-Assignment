import  { useEffect } from 'react'

export default function AuthRouter({Component}) {
    useEffect(()=>{
      console.log("=====>",useEffect);
    });
  return (
    <div>{Component}</div>
  )
}
