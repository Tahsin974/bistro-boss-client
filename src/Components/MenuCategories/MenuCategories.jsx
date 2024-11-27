import Button from "../Button/Button";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategories = ({items,buttonValue}) => {
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
            <Button
            color='black'
            hoverColor='white'
            flex={true}
            justifyCenter={true}
            >{buttonValue}</Button>
        </div>
    );
};

export default MenuCategories;