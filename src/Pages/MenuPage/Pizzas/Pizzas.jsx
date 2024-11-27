import Cover from "../../../Components/Cover/Cover";
import MenuCategories from "../../../Components/MenuCategories/MenuCategories";
import useMenu from "../../../Hooks/useMenu";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"

const Pizzas = () => {
    const [menu,loading] = useMenu();
    if(loading){
        return <>
        <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    const pizzas = menu.filter(item => item.category === 'pizza')
    
    return (
        <section className="my-28 space-y-10 ">
            <Cover
            img={pizzaImg}
            coverHeading={"pizzas"}
            
            ></Cover>
            
            <MenuCategories
            items={pizzas}
            buttonValue={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategories>
        </section>
    );
};

export default Pizzas;