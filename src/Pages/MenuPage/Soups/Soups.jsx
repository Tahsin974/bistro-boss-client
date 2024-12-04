import Cover from "../../../Components/Cover/Cover";
import MenuCategories from "../../../Components/MenuCategories/MenuCategories";
import useMenu from "../../../Hooks/useMenu";
import soupImg from "../../../assets/menu/soup-bg.jpg"

const Soups = () => {
    const [menu,loading] = useMenu();
    if(loading){
        return <>
        <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <section className="my-28 space-y-10 ">
            <Cover
            img={soupImg}
            coverHeading={"soups"}
            
            ></Cover>
            
            <MenuCategories
            items={soups}
            title={'soups'}
            buttonValue={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategories>
        </section>
    );
};

export default Soups;