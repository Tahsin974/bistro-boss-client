import Cover from "../../../Components/Cover/Cover";
import DynamicTitle from "../../../Components/DynamicTitle/DynamicTitle";
import menuImg from '../../../assets/menu/banner3.jpg'

const MenuBanner = () => {

    return (
        <div>
            <DynamicTitle
            pageName='Menu'
            ></DynamicTitle>
            <Cover
            img={menuImg}
            coverHeading='OUR MENU'
            subHeading={'would you like to try a dish?'}
            ></Cover>
            
            
            
        </div>
    );
};

export default MenuBanner;