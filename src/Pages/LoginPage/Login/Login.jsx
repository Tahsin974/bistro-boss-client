import { Link, useLocation, useNavigate } from "react-router";
import DynamicTitle from "../../../Components/DynamicTitle/DynamicTitle";
import bgImg from "../../../assets/others/authentication.png";
import loginImg from "../../../assets/others/authentication2.png";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGithub,
  FaGoogle,
} from "react-icons/fa6";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuthContext from "../../../Hooks/useAuthContext";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Input } from "@heroui/react";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { userLogin, setUser, setLoading, googleSignIn } = useAuthContext();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  // Google Sign Up
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      setUser(user);
      setLoading(false);
      const userInfo = {
        name: user.displayName,
        email: user.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          console.log("user Added to db");
          Swal.fire({
            title: "Log In Successfully Done",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(location.state || "/home", { replace: true });
              reset();
            }
          });
        } else {
          console.log(res.data);
          Swal.fire({
            title: "Login Successfully Done",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(location.state || "/home", { replace: true });
              reset();
            }
          });
        }
      });
    });
  };
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userLogin(data.email, data.password).then((result) => {
      const user = result.user;
      setUser(user);
      setLoading(false);
      Swal.fire({
        title: "Login Successfully Done",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(location.state || "/home", { replace: true });
          reset();
        }
      });
    });
    console.log(data);
  };

  // Captcha
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidate = (e) => {
    const userCaptcha = e.target.value;
    if (validateCaptcha(userCaptcha)) {
      setDisabled(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Captcha Does not match",
      }).then((result) => {
        if (result.isConfirmed) {
          setDisabled(true);
          e.target.value = "";
        }
      });
    }
  };
  return (
    <div>
      <DynamicTitle pageName="Login"></DynamicTitle>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div
          className="hero-content flex-col lg:flex-row shadow-2xl max-w-4xl lg:px-14 py-6 my-28 border border-neutral-400"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <div>
            <img src={loginImg} alt="" />
          </div>
          <div className="card bg-none w-full max-w-sm shrink-0 ">
            <h3 className="text-3xl font-bold text-center">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  className="input input-bordered  bg-white text-black p-1 mb-2"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <FaEye className="text-2xl text-default-400 cursor-pointer" />
                      ) : (
                        <FaEyeSlash className="text-2xl text-default-400 cursor-pointer" />
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
                {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
              </div>

              <div className="form-control space-y-2">
                <LoadCanvasTemplate />
                <input
                  type="text"
                  placeholder="Type Captcha"
                  onBlur={handleValidate}
                  className={
                    disabled
                      ? "input input-bordered  bg-white text-black "
                      : "input input-bordered  bg-white text-black border-green-500"
                  }
                />
              </div>
              <div className="form-control my-6 ">
                <button
                  disabled={disabled}
                  className="btn bg-[#D1A054] hover:bg-[#b88e4f] text-white border-0"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center">
              <Link
                to="/sign-up"
                className="link cursor-pointer text-[#D1A054]  "
              >
                New here? Create a New Account
              </Link>
              <div className="divider divider-horizontal mx-auto">
                Or sign in with{" "}
              </div>
              <div className="space-x-4">
                <button className="btn btn-circle btn-outline text-xl text-black border-black">
                  <FaFacebookF />
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-circle btn-outline text-xl text-black border-black"
                >
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

export default Login;
