import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategories from "../../../Components/MenuCategories/MenuCategories";

const PopularItems = () => {
    const [menu,loading] = useMenu();
    if(loading){
        return <>
        <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    const popularItems = menu.filter(popularItem => popularItem.category === 'popular')
    
    return (
        <section className="my-28 space-y-10 ">
            <SectionTitle
            subHeading='Popular Items'
            Heading='FROM OUR MENU'
            ></SectionTitle>
            <MenuCategories
            items={popularItems}
            buttonValue={'view full menu'}
            ></MenuCategories>
           
            
        
            
        </section>
    );
};

export default PopularItems;