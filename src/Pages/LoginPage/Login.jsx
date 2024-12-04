import { Link } from "react-router";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import bgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png"
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
const Login = () => {
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
          <div >
            <img src={loginImg} alt="" />
          </div>
          <div className="card bg-none w-full max-w-sm shrink-0 ">
            <h3 className="text-3xl font-bold text-center">Login</h3>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered  bg-white text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered  bg-white text-black"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <input
                  type="text"
                  className="input input-bordered  bg-white text-black"
                  required
                />
              </div>
              <div className="form-control">
              <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-blue-700 font-semibold">
                    Reload Captcha
                  </a>
                </label>
                <input
                  type="text"
                  placeholder="type here"
                  className="input input-bordered  bg-white text-black"
                  required
                />
                
              </div>
              <div className="form-control my-6 ">
                <button className="btn bg-[#D1A054] hover:bg-[#b88e4f] text-white border-0">Login</button>
              </div>
              <div className="text-center">
              <Link to='/sign-up'className="text-[#D1A054]  " >New here? Create a New Account</Link>
              <div className="divider divider-horizontal mx-auto">Or sign in with </div>
              <div className="space-x-4">
              <button className="btn btn-circle btn-outline text-xl text-black border-black">
              <FaFacebookF />

              </button>
              <button className="btn btn-circle btn-outline text-xl text-black border-black">
              <FaGoogle />

              </button>
              <button className="btn btn-circle btn-outline text-xl text-black border-black">
              <FaGithub />

              </button>
              </div>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
