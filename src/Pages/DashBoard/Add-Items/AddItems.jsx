import { FaUtensils } from "react-icons/fa";
import GradientButton from "../../../Components/Button/gradientButton";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_api_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload in imgbb
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        reset()
        Swal.fire({
          icon: "success",
          title: `${data.name} has been added`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } 
    

    // console.log(res.data)
  };
  return (
    <div>
      <SectionTitle Heading={"ADD AN ITEM"} subHeading={"What's new?"} />
      <div className="card bg-white w-full rounded  my-10 mx-2 ">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div className="form-control lg:col-span-2 md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">Recipe name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Recipe Name"
                className="input input-bordered  bg-white text-black"
                {...register("name")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category")}
                className="select select-bordered bg-white text-black"
              >
                <option value="default" disabled>
                  Select A Category
                </option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
                <option value="offered">Offer</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Enter Price"
                className="input input-bordered  bg-white text-black"
                {...register("price")}
                required
              />
            </div>

            <div className="form-control lg:col-span-2 md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">
                  Recipe Details*
                </span>
              </label>
              <textarea
                placeholder="Write Your Recipe Here"
                className="textarea textarea-bordered textarea-lg  bg-white text-black"
                {...register("recipe")}
                required
              />
            </div>
            <div className="form-control lg:col-span-2 md:col-span-2">
              <input
                type="file"
                className="file-input  w-full max-w-xs bg-white text-black"
                {...register("image")}
                required
              />
            </div>
          </div>
          <div className="form-control mt-6 me-auto ">
            <GradientButton buttonValue={"Add Items"}>
              <FaUtensils />
            </GradientButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
