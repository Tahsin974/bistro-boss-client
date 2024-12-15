import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import DynamicTitle from "../../../Components/DynamicTitle/DynamicTitle";
import bgImg from "../../../assets/others/authentication.png";
import loginImg from "../../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import useAuthContext from "../../../Hooks/useAuthContext";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

const SignUp = () => {
  const {createUser,setUser,setLoading,googleSignIn,updateUserProfile} = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  // Google Sign Up
  const handleGoogleSignIn = () =>{
    
    googleSignIn()
    .then((result) => {
      const user = result.user;
      setUser(user)
      setLoading(false)
      Swal.fire({
        title: "Sign In Successfully Done",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          
            navigate( '/home')
            
         
          
          
        }
      });
    })
  }
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   createUser(data.email,data.password)
   .then(result =>{
    const user = result.user;
    setUser(user)
    setLoading(false)
    updateUserProfile(data.name,data.photoUrl)
    .then(() => {
      
      Swal.fire({
        title: "Account Created Successfully ",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
         
          navigate( '/home')
            reset()
        }
      });
    })
    
    
    
    
  })
};
  return (
    <div>
      <DynamicTitle pageName="Sign Up"></DynamicTitle>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div
          className="hero-content flex-col lg:flex-row-reverse shadow-2xl max-w-4xl lg:px-14 py-6 my-28 border border-neutral-400"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <div>
            <img src={loginImg} alt="" />
          </div>
          <div className="card bg-none w-full max-w-sm shrink-0 ">
            <h3 className="text-3xl font-bold text-center">Sign Up</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
                  className="input input-bordered  bg-white text-black"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo Url</span>
                </label>
                <input
                  type="url"
                  {...register("photoUrl", { required: true })}
                  placeholder="Enter Photo Url"
                  className="input input-bordered  bg-white text-black"
                />
                {errors.photoUrl && (
                  <span className="text-red-600">Photo Url is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="input input-bordered  bg-white text-black"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                
                <Input
                  placeholder="Enter your password"
                  className="input input-bordered  bg-white text-black p-1"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        
                        <FaEye className="text-2xl text-default-400 cursor-pointer"/>

                      ) : (
                        <FaEyeSlash className="text-2xl text-default-400 cursor-pointer"/>

                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                    pattern: /^(?=.*[A-Z].*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                  })}
                  
                />
                
                {errors.password?.type == 'required' && (
                  <span className="text-red-600">Password is required</span> || <span className="text-green-600">Password Accepted</span>
                )}
                {errors.password?.type == 'minLength' && (
                  <span className="text-red-600">Password must be 6 characters</span> 
                ) }
                {errors.password?.type == 'maxLength' && (
                  <span className="text-red-600">Password must be less then 10 characters</span> 
                ) }
                {errors.password?.type == 'pattern' && (
                  <span className="text-red-600">Password must have atleast two uppercase letters(A-Z) one lowercase letter(a-z) one digit(0-9)</span> 
                ) }
                 
                
              </div>
              <div className="form-control my-6 ">
                <button className="btn bg-[#D1A054] hover:bg-[#b88e4f] text-white border-0">
                  Sign Up
                </button>
              </div>
              
            </form>
            <div className="text-center">
              <Link to='/sign-up'className="link cursor-pointer text-[#D1A054]  " >New here? Create a New Account</Link>
              <div className="divider divider-horizontal mx-auto">Or sign in with </div>
              <div className="space-x-4">
              <button className="btn btn-circle btn-outline text-xl text-black border-black">
              <FaFacebookF />

              </button>
              <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-xl text-black border-black">
              <FaGoogle />

              </button>
              <button className="btn btn-circle btn-outline text-xl text-black border-black">
              <FaGithub />

              </button>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
