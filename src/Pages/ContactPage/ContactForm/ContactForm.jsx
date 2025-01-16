import { BsFillSendFill } from "react-icons/bs";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import GradientButton from "../../../Components/Button/gradientButton";
const ContactForm = () => {

  return (
    <section className="my-28 space-y-10">
      <SectionTitle
        Heading={"contact form"}
        subHeading={"send us a message"}
      ></SectionTitle>
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
            <GradientButton buttonValue={'Send Message'}>
            <BsFillSendFill />
            </GradientButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
