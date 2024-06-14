
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function Login() {
  let [User,setUser]=useState({email:"",password:""});
let [cookies,setCookies]=useCookies([""]);
const Navigate=useNavigate();
  const loginhandler=(e)=>{
   e.preventDefault();
   console.log(User);
   setCookies("user",User);
   setUser({email:"",password:""});
   Navigate("/home");
  };



  return (
    <form onSubmit={(e)=>loginhandler(e)} className="flex justify-center items-center flex-col h-[100vh]">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value=" Enter Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value=" password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value=" password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
    </form>
  );
}
