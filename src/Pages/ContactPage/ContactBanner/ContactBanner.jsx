import Cover from "../../../Components/Cover/Cover";
import bannerImg from "../../../assets/contact/banner.jpg";
const ContactBanner = () => {
    return (
        <Cover
          img={bannerImg}
          coverHeading={"CONTACT US"}
          subHeading={"would you like to try a dish?"}
        ></Cover>
    );
};

export default ContactBanner;