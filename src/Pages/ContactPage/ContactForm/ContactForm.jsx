import { BsFillSendFill } from "react-icons/bs";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";

const ContactForm = () => {
  const [file,setFile] = useState();
  const handleUploadImg = e =>{
    setFile(URL.createObjectURL(e.target.files[0]))
  }
  console.log(file)
  return (
    <section className="my-28 space-y-10">
      <SectionTitle
        Heading={"contact form"}
        subHeading={"send us a message"}
      ></SectionTitle>
      <input type="file" onChange={handleUploadImg} name="" id="" />
      <img src={file} alt="" />
      <div className="card bg-[#F3F3F3] w-full rounded-none  px-5 py-8" >
        <form className="card-body ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered  bg-white text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered  bg-white text-black"
              required
            />
          </div>
          <div className="form-control lg:col-span-2 md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold">Phone*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="input input-bordered  bg-white text-black"
              required
            />
           
          </div>
          <div className="form-control lg:col-span-2 md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold">Message*</span>
            </label>
            <textarea
             
              placeholder="Write Your Message Here"
              className="textarea textarea-bordered textarea-lg  bg-white text-black"
              required
            />
           
          </div>
          </div>
          <div className="form-control mt-6 mx-auto ">
            <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none text-white border-0">Send Message
            <BsFillSendFill />

            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
