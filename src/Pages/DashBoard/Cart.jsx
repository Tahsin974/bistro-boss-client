import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
    const {cart,refetch} = useCart();
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total,item)=>{
        return total + item.price
    },0)

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                          Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success"
              });
              refetch()
                    }
                })
            
            
            }
          });
    }
  return (
    <div>
      <SectionTitle
        Heading={"WANNA ADD MORE?"}
        subHeading={"My Cart"}
      ></SectionTitle>

      <div className="p-3 bg-white lg:mx-10 my-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-4 justify-items-center items-center pb-4 text-2xl cinzel-bold">
            <h3>Total Orders: {cart.length}</h3>
            <h3>Total Price: {totalPrice}</h3>
            <button className="btn bg-[#D1A054] text-white hover:bg-[#bb8c46]">pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="bg-[#D1A054]">
              <tr className="text-white text-lg ">
               
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                cart.map((item,index) => <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-14 w-14">
                            <img
                              src={item.image}
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><button onClick={()=>handleDelete(item._id)} className="btn  btn-sm bg-red-600 hover:bg-red-700 text-white"><FaTrashAlt/></button></td>
                  </tr>)
              }
            </tbody>
        
          </table>

        </div>
      </div>
    </div>
  );
};

export default Cart;



