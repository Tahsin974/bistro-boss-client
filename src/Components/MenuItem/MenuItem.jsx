
const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item;
    
    return (
        <div className="md:flex items-center md:space-x-4 space-y-4">
            <img style={{
                borderRadius:'0px 200px 200px 200px'
            }} className="w-[118px] h-[101px]" src={image} alt="" />
            <div>
                <h4 className="uppercase cormorant-garamond-bold">{name}</h4>
                <p className="font-light">{recipe}</p>
                <p className="text-yellow-600 text-xl font-semibold">${price}</p>
            </div>
            
            
        </div>
    );
};

export default MenuItem;