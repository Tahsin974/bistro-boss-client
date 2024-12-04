import { Link } from "react-router";
import Button from "../Button/Button";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategories = ({items,buttonValue,title}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10 my-7 justify-items-center px-2">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }

            </div>
            <Link to={`/order/${title}`}>
            <Button
            color='black'
            hoverColor='white'
            flex={true}
            justifyCenter={true}
            >{buttonValue}</Button>
            </Link>
        </div>
    );
};

export default MenuCategories;