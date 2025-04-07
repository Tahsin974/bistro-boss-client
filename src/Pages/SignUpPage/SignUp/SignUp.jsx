import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import DynamicTitle from "../../../Components/DynamicTitle/DynamicTitle";
import bgImg from "../../../assets/others/authentication.png";
import loginImg from "../../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import useAuthContext from "../../../Hooks/useAuthContext";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, setUser, setLoading, googleSignIn, updateUserProfile } =
    useAuthContext();
  const navigate = useNavigate();

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
            title: "Sign In Successfully Done",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/home");
            }
          });
        } else {
          console.log(res.data);
          Swal.fire({
            title: "Sign In Successfully Done",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/home");
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
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      setUser(user);
      setLoading(false);
      updateUserProfile(data.name, data.photoUrl).then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user Added to db");
            Swal.fire({
              title: "Account Created Successfully ",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/home");
                reset();
              }
            });
          }
        });
      });
    });
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="fieldset card-body"
            >
              <label className="fieldset-label">
                <span className="font-semibold">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Your Name"
                className="input w-full  bg-white text-black"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}

              <label className="fieldset-label">
                <span className="font-semibold">Photo Url</span>
              </label>
              <input
                type="url"
                {...register("photoUrl", { required: true })}
                placeholder="Enter Photo Url"
                className="input w-full  bg-white text-black"
              />
              {errors.photoUrl && (
                <span className="text-red-600">Photo Url is required</span>
              )}

              <label className="fieldset-label">
                <span className="font-semibold">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email"
                className="input w-full  bg-white text-black"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}

              <label className="fieldset-label">
                <span className="font-semibold">Password</span>
              </label>

              <input
                placeholder="Enter your password"
                className="input w-full  bg-white text-black"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                  pattern: /^(?=.*[A-Z].*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                })}
              />

              {errors.password?.type == "required" &&
                (<span className="text-red-600">Password is required</span> || (
                  <span className="text-green-600">Password Accepted</span>
                ))}
              {errors.password?.type == "minLength" && (
                <span className="text-red-600">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type == "maxLength" && (
                <span className="text-red-600">
                  Password must be less then 10 characters
                </span>
              )}
              {errors.password?.type == "pattern" && (
                <span className="text-red-600">
                  Password must have atleast two uppercase letters(A-Z) one
                  lowercase letter(a-z) one digit(0-9)
                </span>
              )}

              <button className="btn bg-[#D1A054] hover:bg-[#b88e4f] text-white border-0">
                Sign Up
              </button>
            </form>
            <div className="text-center">
              <Link
                to="/login"
                className="link cursor-pointer text-[#D1A054]  "
              >
                Already registered? Go to log in
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

export default SignUp;
