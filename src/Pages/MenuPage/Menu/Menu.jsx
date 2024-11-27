import Desserts from "../Desserts/Desserts";
import MenuBanner from "../MenuBanner/MenuBanner";
import Offers from "../Offers/Offers";
import Pizzas from "../Pizzas/Pizzas";
import Salads from "../Salads/Salads";
import Soups from "../Soups/Soups";

const Menu = () => {
    return (
        <div>
            <MenuBanner></MenuBanner>
            <Offers></Offers>
            <Desserts></Desserts>
            <Pizzas></Pizzas>
            <Salads></Salads>
            <Soups></Soups>

        </div>
    );
};

export default Menu;