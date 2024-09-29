import React , {useEffect} from "react";
import { useForm } from "react-hook-form";
import {useSelector , useDispatch} from 'react-redux'
import { loginImg, google, facebook, github } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUsers } from "../Redux/slice/userSlice";
const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user)

  useEffect(()=>{
    dispatch(getUsers());
  },[dispatch])


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors , isSubmitting },
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve) =>{
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }


    

  const onSubmit = async (data) => {
    await delay(2)

    const validUser = userData.users.find(user => user.Email === data.userEmail && user.Password === data.userPassword)
    //admin login 
    if(data.userEmail.trim() === import.meta.env.VITE_ADMINEMAIL.trim() && data.userPassword.trim() === import.meta.env.VITE_ADMINPASSWORD.trim()){
      toast.success("Logged in successfully" , {theme: "dark"})
      setTimeout(() => {
        navigate('/adminDashboard/dashboard')
      }, 2000);
      localStorage.setItem('adminCredentials' , JSON.stringify({
        admin_mail : data.userEmail
      }))

      // other users login 
    } else if(validUser) {
      const role = validUser.Role

        // mentor login 

        if(role === 'mentor'){
          toast.success('Mentor logged in successfully' , {theme: "dark"})
          setTimeout(() => {
            navigate('/mentorDashboard/dashboard');
          }, 2000);
          localStorage.setItem('mentorCredentials' , JSON.stringify({
            mentor_mail : data.userEmail,
            role : role
          }))
        }
        
        // student login 
        else {
          setTimeout(() => {
            navigate('/studentDashboard/dashboard');
          }, 2000);

          toast.success('Student logged in successfully' , {theme: 'dark'})
          localStorage.setItem('studentCredentials' , JSON.stringify({
            student_mail : data.userEmail,
            role : role
          }))
        }
    }  else {
      toast.error("Invalid credentials" , {theme: "dark"})
    }
    reset();
  }
  return (
    <div className="w-full h-screen flex items-center px-10">
      {/* login section  */}
      <div className="relative w-[50vw] h-full flex justify-center items-center">
        <header className="absolute top-5 w-full">
          <h1 className="font-bold text-4xl text-[#3a5a40]">Schoolify</h1>
        </header>

        <div className="w-[50%]">
          <h2 className="text-3xl font-semibold text-center pb-3">
            welcome back!
          </h2>
          <p className="text-center font-medium text-[#336309]">
            Login to you account
          </p>

          {/* social media login  */}
          <div className="flex items-center justify-center my-4 gap-8">
            <img
              className="w-16 p-2 shadow-xl rounded-full"
              src={google}
              alt=""
            />
            <img
              className="w-16 p-2 shadow-xl rounded-full"
              src={github}
              alt=""
            />
            <img
              className="w-16 p-2 shadow-xl rounded-full"
              src={facebook}
              alt=""
            />
          </div>

          {/* or section  */}
          <div className="flex items-center gap-2 my-8" >
            <div className="border border-zinc-400 w-full" ></div>
            <p>or</p>
            <div className="border border-zinc-400 w-full" ></div>
          </div>

          <form className="" onSubmit={handleSubmit(onSubmit)} >
            <label className="font-semibold text-[#3a5a40]" >Email ID:</label>
            <br />
            <input {...register("userEmail" , {
              required:{
                value: true,
                message: "This feild is required"
              }
            })} className="ring-1 ring-[#a3b18a] w-full px-4 py-2 rounded-lg outline-none mt-2 mb-4" type="text" placeholder="example@xyz.com"/>
            <br />
            {errors.userEmail && <p className="text-xs text-red-500" >{errors.userEmail.message}</p>}
            <label className="font-semibold text-[#3a5a40]" >Password:</label>
            <br />
            <input {...register("userPassword" , {
              required:{
                value:true,
                message:"This feild is required"
              }
            })} className="ring-1 ring-[#a3b18a] w-full px-4 py-2 rounded-lg outline-none mt-2 mb-4" type="password" placeholder="example@xyz.com"/>
            <br />
            {errors.userPassword && <p className="text-xs text-red-500" >{errors.userPassword.message}</p>}
            <button disabled={isSubmitting} className={`${isSubmitting && "disabled:opacity-40 cursor-not-allowed"} text-white bg-black w-full py-2 rounded-lg mt-4`}>{isSubmitting ? "Logging" : "Log In"}</button>
          </form>
        </div>
      </div>

      {/* login image section  */}
      <div className="w-[50vw] h-screen">
        <img className="w-full h-full object-contain" src={loginImg} alt="" />
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
