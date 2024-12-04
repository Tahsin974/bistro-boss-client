import Cover from "../../../Components/Cover/Cover";
import MenuCategories from "../../../Components/MenuCategories/MenuCategories";
import useMenu from "../../../Hooks/useMenu";
import saladImg from "../../../assets/menu/salad-bg.jpg"

const Salads = () => {
    const [menu,loading] = useMenu();
    if(loading){
        return <>
        <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    const salads = menu.filter(item => item.category === 'salad')
    
    return (
        <section className="my-28 space-y-10 ">
            <Cover
            img={saladImg}
            coverHeading={"salads"}
            
            ></Cover>
            
            <MenuCategories
            items={salads}
            title={'salads'}
            buttonValue={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategories>
        </section>
    );
};

export default Salads;