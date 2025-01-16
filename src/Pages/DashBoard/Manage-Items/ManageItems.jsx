import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import { Link } from "react-router";

const ManageItems = () => {
  const axiosSecure = useAxiosSecure();
  const [menu, loading, refetch] = useMenu();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
            refetch()
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle Heading={"MANAGE ALL menu"} subHeading={"Hurry Up!"} />
      {loading ? (
        <>
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </>
      ) : (
        <div className="p-8 bg-white lg:mx-10 my-16">
          <div className=" pb-4 text-2xl cinzel-bold">
            <h3 className="uppercase">Total menu: {menu.length} </h3>
          </div>
          {!menu.length == 0 ? (
            <div className="overflow-x-auto">
              <table className="table ">
                {/* head */}
                <thead className="bg-[#D1A054]">
                  <tr className="text-white text-lg ">
                    <th>#</th>
                    <th>Item-Image</th>
                    <th>Item-Name</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {menu.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>

                      <td>
                        <div className="flex menu-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-14 w-14">
                              <img src={item.image} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>$ {item.price}</td>
                      <td>
                        <Link to={`/dashboard/update-item/${item._id}`}>
                        <button className="btn btn-sm bg-[#D1A054] border-[#D1A054] text-white hover:bg-[#bb8c46] hover:border-[#D1A054]">
                          <FaEdit />
                        </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(item)}
                          className="btn  btn-sm bg-red-600 hover:bg-red-700 text-white"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="hero bg-white min-h-full">
              <div className="hero-content text-center">
                <div>
                  <h1 className="text-2xl font-bold text-slate-400">
                    No One have Logged In on This Website
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageItems;
