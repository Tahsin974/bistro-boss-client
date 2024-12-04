import DynamicTitle from "../../../Components/DynamicTitle/DynamicTitle";
import ContactBanner from "../ContactBanner/ContactBanner";
import ContactForm from "../ContactForm/ContactForm";
import OurLocation from "../OurLocation/OurLocation";


const Contact = () => {
  return (
    <>
      <DynamicTitle pageName={"Contact"}></DynamicTitle>
      <section>
        <ContactBanner></ContactBanner>
        <OurLocation></OurLocation>
        <ContactForm></ContactForm>
      </section>
      
    </>
  );
};

export default Contact;
