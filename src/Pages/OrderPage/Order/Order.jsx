import FoodItems from "../FoodItems/FoodItems";
import OrderBanner from "../OrderBanner/OrderBanner";
import DynamicTitle from "../../../Components/DynamicTitle/DynamicTitle";
const Order = () => {
    return (
        <div>
            <DynamicTitle
            pageName={"Order Food"}
            ></DynamicTitle>
            <OrderBanner></OrderBanner>
            <FoodItems></FoodItems>
        </div>
    );
};

export default Order;