import Cover from "../../../Components/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg"
const OrderBanner = () => {
    return (
        <div>
            <Cover
            img={orderImg}
            coverHeading={"Order"}
            subHeading={"would you like to try a dish?"}
            ></Cover>
        </div>
    );
};

export default OrderBanner;