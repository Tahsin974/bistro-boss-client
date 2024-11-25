const ItemCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div>
      <div className="card bg-[#F3F3F3] text-black border rounded-none shadow-xl">
        <figure>
          <img
            src={image}
            alt="Soup"
            className="w-full"
            
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn lg:btn-wide bg-[#E8E8E8] uppercase text-yellow-600 font-serif  border-b-yellow-600 border-0 border-b-2 hover:border-b-0 hover:bg-neutral-800">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
