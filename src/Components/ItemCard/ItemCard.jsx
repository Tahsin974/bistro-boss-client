import Swal from "sweetalert2";
import useAuthContext from "../../Hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ItemCard = ({ item, isPrice }) => {
  const { name, image, recipe, price, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const { refetch } = useCart();
  const handleAddToCart = () => {
    if (user && user.email) {
      // Add to database
      const cartItem = {
        menuId: _id,
        customerEmail: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${name} has been added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "Please Login For Add Item To The Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-[#F3F3F3] text-black border border-gray-100 rounded-none shadow-xl h-[485px]">
        <figure>
          <img src={image} alt="Soup" className="w-full" />
          {isPrice && (
            <p className="bg-neutral-900 text-white absolute px-3 py-2 font-semibold top-2 right-2 ">
              ${price}
            </p>
          )}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold">{name}</h2>
          <p className="font-light">{recipe}</p>
          <div className="card-actions">
            <button
              onClick={handleAddToCart}
              className="btn lg:btn-wide bg-[#E8E8E8] uppercase text-yellow-600 font-serif  border-b-yellow-600 border-0 border-b-2 hover:border-b-0 hover:bg-neutral-800"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
