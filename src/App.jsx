import { useState } from "react";
import errorLogo from "./assets/Group 2.svg";
import { FcGoogle } from "react-icons/fc";

function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the regex
  return emailRegex.test(email);
}
function App() {
  const [emailError,setEmailError]=useState({
    isError:false,
    message: ''
  })
  const [inputs,setInputs]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    if(e.target.name === "email"){
      setEmailError({isError:false, message:''})
    }
    setInputs(prev => {
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  const handleSubmit=()=>{
    if(!inputs?.email){
     return  setEmailError({isError:true,message:'The email field is required'})
    }

    if(!validateEmail(inputs?.email)){
      setEmailError({isError:true,message:'The email is not valid'})
    }else{
      setEmailError({isError:false, message:''})
    }
  }
  return (
    <div className="w-screen h-screen  relative bg-heroSmall lg:bg-hero bg-no-repeat bg-auto lg:bg-contain flex item-center justify-center overflow-x-hidden">
      <div className="w-[42vw] h-auto rounded-md bg-white absolute top-[5vh] lg:top-[10vh] left-[50%] -translate-x-[50%] overflow-hidden flex flex-col items-center">
        <div className="bg-white flex items-center justify-center w-full h-[9vh] shadow-myShadow rounded-t-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/315px-Amazon_logo.svg.png"
            alt="amazon logo"
            className="lg:w-[99px] lg:h-[32px] w-[50px] h-[16px]object-contain bg-transparent"
          />
        </div>

        <h1 className="text-center text-[#20B716] text-[1.81rem] mt-4 font-josefin">
          Login
        </h1>

        <div className="w-full h-[20.5vh] bg-no-repeat bg-treeSmall lg:bg-treeLarge bg-contain  bg-center mt-6" />

        <div className="w-full lg:w-[28vw]  mt-6">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            className="w-full outline-none border-b-2 border-gray-200 px-[5px] py-[9px] placeholder:text-[#20B716] font-josefin"
            required
          />
         {emailError.isError &&  <p className="flex items-center gap-1 mt-2 text-[13px] text-[#EE2D6E] font-semibold">
            <img src={errorLogo} alt="error" /> 
            {emailError?.message}
          </p>
         }  
        </div>

        <div className="w-full lg:w-[28vw] mt-6">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            className="w-full outline-none border-b-2 border-gray-200 px-[5px] py-[9px] placeholder:text-[#20B716] font-josefin"
            required
          />
        </div>

        <button className="border-none rounded-[40px] mt-6 bg-[#20B716] w-full lg:w-[28vw] h-[49px] text-white font-josefin" onClick={handleSubmit}>
          Sign In
        </button>

        <div className="lg:mt-4 mt-2 flex items-center lg:justify-between flex-col md:flex-row gap-2 font-josefin w-full lg:w-[28vw]">
          <p>Forget Password?</p>
          <p className="text-[#D9185F] text-sm">New User? Sign Up </p>
        </div>

        <p className="tex-center font-semibold mt-2 lg:mt-4 font-josefin">or</p>

        <button className="w-full lg:w-[28vw] flex items-center lg:text-[16px] text-[10px] bg-[#4285F4] mt-4 lg:mt-6 rounded h-[46px] p-1 text-white font-josefin">

          <div className="w-9 aspect-square bg-white  flex items-center justify-center rounded">
            <FcGoogle />
          </div>

          <span className="uppercase flex-1">Continue with google</span>
        </button>

        <button className="w-full lg:w-[28vw] flex items-center lg:text-[16px] text-[10px] bg-[#1877F2] mt-4 rounded h-[46px] p-1 text-white mb-4 font-josefin">

          <div className="w-9 aspect-square bg-white  flex items-center justify-center rounded">
            <FcGoogle />
          </div>

          <span className="uppercase flex-1">Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
}

export default App;
