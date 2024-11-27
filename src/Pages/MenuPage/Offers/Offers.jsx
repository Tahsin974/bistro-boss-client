import MenuCategories from "../../../Components/MenuCategories/MenuCategories";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const Offers = () => {
    const [menu,loading] = useMenu();
    if(loading){
        return <>
        <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    const offeredItems = menu.filter(item => item.category === 'offered')
    
    return (
        <section className="my-28 space-y-10 ">
            <SectionTitle
            Heading={"TODAY'S OFFER"}
            subHeading={"Don't miss"}
            >
            </SectionTitle>
            <MenuCategories
            items={offeredItems}
            buttonValue={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategories>
        </section>
    );
};

export default Offers;