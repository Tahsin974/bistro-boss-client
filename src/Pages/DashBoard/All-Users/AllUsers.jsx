import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data:users=[],refetch} = useQuery({
        queryKey:['users'],
        queryFn : async ()=>{
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    // make admin
    const handleMakeAdmin = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if(res.data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: "success",
                    title: `${user.name} is your new admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    // delete User
    const handleDeleteUser = (user) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, remove ${user.name}!`
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                          Swal.fire({
                title: "Deleted!",
                text: `${user.name} has been removed.`,
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
            <SectionTitle Heading={"MANAGE ALL USERS"} subHeading={'How many??'}></SectionTitle>
            <div className="p-4 bg-white lg:mx-10 my-16">
                    <div className=" pb-4 text-2xl cinzel-bold">
                        <h3>Total Orders: {users.length} </h3>
                        
                    </div>
                    <div className="overflow-x-auto">
                      <table className="table ">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                          <tr className="text-white text-lg ">
                           
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* row 1 */}
                          {
                            users.map((user,index) => <tr key={user._id}>
                                <td>{index + 1}</td>

                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                  {
                                    user.role === 'admin' ?
                                    <p className="text-green-600">Admin</p> :<button 
                                    onClick={()=>handleMakeAdmin(user)} 
                                    className="btn btn-sm bg-[#D1A054] border-[#D1A054] text-white hover:bg-[#bb8c46] hover:border-[#D1A054]"><FaUsers/></button>
                                  }
                                </td>
                                <td><button onClick={()=>handleDeleteUser(user)} className="btn  btn-sm bg-red-600 hover:bg-red-700 text-white"><FaTrashAlt/></button></td>
                              </tr>)
                          }
                        </tbody>
                    
                      </table>
            
                    </div>
                  </div>
            
        </div>
    );
};

export default AllUsers;