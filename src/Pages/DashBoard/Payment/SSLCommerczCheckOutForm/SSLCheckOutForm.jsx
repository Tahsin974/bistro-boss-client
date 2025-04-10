import { FaEnvelope } from "react-icons/fa";
import useAuthContext from "../../../../Hooks/useAuthContext";
import moment from "moment";
import useCart from "../../../../Hooks/useCart";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const SSLCheckOutForm = () => {
  const { cart } = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const price = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  console.log(cart);
  const handlePlaceOrder = async () => {
    const paymentDetails = {
      email: user.email,
      transactionId: "",
      date: moment(new Date()).format("MMMM Do YYYY"),
      price: price,
      cartIDs: cart.map((item) => item._id),
      menuIDs: cart.map((item) => item.menuId),
      status: "pending",
    };

    const res = await axiosSecure.post(
      `/create-ssl-payment?email=${user.email}`,
      paymentDetails
    );
    if (res.data?.gatewayURL) {
      window.location.replace(res.data.gatewayURL);
    }
  };

  return (
    <div>
      <fieldset className="fieldset w-full bg-[#F3F3F3] border border-[#F3F3F3] p-4 rounded-box">
        <div className="space-y-2 my-3.5">
          <h3 className="text-xl font-semibold text-black">Payment Details</h3>
          <p className="text-gray-400 font-semibold text-base">
            Complete your order by providing your payment details.
          </p>
        </div>
        <label className="input w-full">
          <span>
            <FaEnvelope className="text-gray-400" />
          </span>
          <input
            type="email"
            className="grow"
            placeholder="enter email"
            value={user?.email}
          />
        </label>
        <button
          onClick={handlePlaceOrder}
          className="btn btn-neutral text-white mt-4"
        >
          Place Order
        </button>
      </fieldset>
    </div>
  );
};

export default SSLCheckOutForm;
