
const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item;
    
    return (
        <div className="md:flex items-center md:space-x-4 space-y-4">
            <img style={{
                borderRadius:'0px 200px 200px 200px'
            }} className="w-[118px] h-[101px]" src={image} alt="" />
            <div>
                <h4 className="uppercase cormorant-garamond-medium">{name}------------------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
            
        </div>
    );
};

export default MenuItem;