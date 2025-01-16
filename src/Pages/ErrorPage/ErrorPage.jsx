import { FaHome } from 'react-icons/fa';
import img from '../../assets/404.gif'
import { Link } from 'react-router';
const ErrorPage = () => {
  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content text-center ">
        <div className="max-w-lg space-y-7">
          <img src={img} alt="" />
          <Link to='/'>
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none text-white border-0">Back To Home <FaHome/> </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
