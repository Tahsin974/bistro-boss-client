import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const OurLocation = () => {
    return (
        <section className="my-28 space-y-10">
        <SectionTitle
          Heading={"our location"}
          subHeading={"visit us"}
        ></SectionTitle>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="card  bg-white  shadow-lg rounded-none">
            <div className="bg-[#D1A054] text-center items-center flex justify-center">
            <p className="text-2xl text-white p-6 "><FaPhone/></p>

            </div>
            <div className="card-body  p-0">
              <div className=" h-[140px] mx-8 mb-8 px-4 pb-8 pt-4 bg-[#F3F3F3] items-center text-center space-y-3">
              <h2 className="text-2xl font-bold">PHONE</h2>
              <p>+8801795981096</p>
              
              </div>
            </div>
          </div>
          <div className="card  bg-white  shadow-lg rounded-none">
            <div className="bg-[#D1A054] text-center items-center flex justify-center">
            <p className="text-2xl text-white p-6 "><FaLocationDot />
            </p>

            </div>
            <div className="card-body  p-0">
              <div className=" mx-8 mb-8 px-4 pb-8 pt-4 bg-[#F3F3F3] items-center text-center space-y-3">
              <h2 className="text-2xl font-bold">ADDRESS</h2>
              <p>F-block Road-3 House-5 ,Mirpur-1 Dhaka-1216</p>
              
              </div>
            </div>
          </div>
          <div className="card  bg-white  shadow-lg rounded-none">
            <div className="bg-[#D1A054] text-center items-center flex justify-center">
            <p className="text-2xl text-white p-6 "><IoTime />
            </p>

            </div>
            <div className="card-body  p-0">
              <div className=" mx-8 mb-8 px-4 pb-8 pt-4 bg-[#F3F3F3] items-center text-center space-y-3">
              <h2 className="text-2xl font-bold">WORKING HOURS</h2>
              <p>Mon - Fri: 08:00am - 10:00pm
                <br />
              Sat - Sun: 10:00am - 11:00pm</p>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OurLocation;