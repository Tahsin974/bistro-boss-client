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
      <div className="card bg-[#F3F3F3] w-full rounded-none  px-5 py-8">
        <form className="fieldset card-body ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div>
              <label className="fieldset-label mb-3">
                <span className="font-semibold">Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input xl:input-xl lg:input-lg md:input-md sm:input-sm input-xs w-full  bg-white text-black"
                required
              />
            </div>
            <div>
              <label className="fieldset-label mb-3">
                <span className="font-semibold">Email*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input xl:input-xl lg:input-lg md:input-md sm:input-sm input-xs w-full  bg-white text-black"
                required
              />
            </div>
            <div className="  lg:col-span-2 md:col-span-2">
              <label className="fieldset-label mb-3">
                <span className="font-semibold">Phone*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="input xl:input-xl lg:input-lg md:input-md sm:input-sm input-xs w-full  bg-white text-black"
                required
              />
            </div>
            <div className="  lg:col-span-2 md:col-span-2">
              <label className="fieldset-label mb-3">
                <span className="font-semibold">Message*</span>
              </label>
              <textarea
                placeholder="Write Your Message Here"
                className="textarea xl:textarea-xl lg:textarea-lg md:textarea-md sm:textarea-sm textarea-xs w-full h-full   bg-white text-black"
                required
              />
            </div>
          </div>
          <div className="  mt-14 mx-auto ">
            <GradientButton buttonValue={"Send Message"}>
              <BsFillSendFill />
            </GradientButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
