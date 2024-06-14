import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  let[product,setproduct]=useState([]);

  const data= useParams()
  useEffect(()=>{
    async function TakeData(params) {
      
      try {
        
        let Response= await axios.get(`https://fakestoreapi.com/products/${data.id}`)
        console.log("🚀 ~ useEffect ~ Response:", Response.data);
        setproduct(Response.data);
        
      } catch (error) {
        toast.error("Somthig is Wrongs");
        
      }
    }
    TakeData();
  },[]);
  return (
    <div >
    <div>
<img src={product?.image} alt="" />
    </div>
      <div>

      <h1>Title:{product?.title}</h1>
      </div>
      </div>
  )
}
