
import ItemCard from "../../../Components/ItemCard/ItemCard";

const FoodTab = ({items}) => {
    return (
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center px-2">
                {
                items.map(item => <ItemCard
                key={item._id}
                item={item}
                isPrice={true}
                ></ItemCard>)
                }
            </div>
    );
};

export default FoodTab;