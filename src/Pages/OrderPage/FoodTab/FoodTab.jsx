import ItemCard from "../../../Components/ItemCard/ItemCard";

const FoodTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-4 justify-items-center px-2">
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