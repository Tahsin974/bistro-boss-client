import FoodItems from "../FoodItems/FoodItems";
import OrderBanner from "../OrderBanner/OrderBanner";

const Order = () => {
    return (
        <div>
            <OrderBanner></OrderBanner>
            <FoodItems></FoodItems>
        </div>
    );
};

export default Order;