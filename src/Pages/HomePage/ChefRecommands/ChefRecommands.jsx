import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ItemCard from "../../../Components/ItemCard/ItemCard";
import useMenu from "../../../Hooks/useMenu";

const ChefRecommands = () => {
    const[menu,loading] = useMenu();
    if(loading){
        return <>
        <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    const soupItems = menu.filter(soupItem => soupItem.category === 'soup');    

    return (
        <section className="my-28 space-y-10">
            <SectionTitle
            subHeading='Should Try'
            Heading='CHEF RECOMMENDS'
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 justify-items-center px-2">
                {
                soupItems.map(item => <ItemCard
                key={item._id}
                item={item}
                ></ItemCard>)
                }
            </div>
            
        </section>
    );
};

export default ChefRecommands;