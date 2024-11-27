import Cover from "../../../Components/Cover/Cover";
import MenuCategories from "../../../Components/MenuCategories/MenuCategories";
import useMenu from "../../../Hooks/useMenu";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"

const Desserts = () => {
    const [menu,loading] = useMenu();
    if(loading){
        return <>
        <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    const desserts = menu.filter(item => item.category === 'dessert')
    
    return (
        <section className="my-28 space-y-10 ">
            <Cover
            img={dessertImg}
            coverHeading={"desserts"}
            
            ></Cover>
            
            <MenuCategories
            items={desserts}
            buttonValue={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategories>
        </section>
    );
};

export default Desserts;