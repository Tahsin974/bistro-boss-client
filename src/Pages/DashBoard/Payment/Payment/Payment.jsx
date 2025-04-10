import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import "./Payment.css";
import SSLCheckOutForm from "../SSLCommerczCheckOutForm/SSLCheckOutForm";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);

const Payment = () => {
  return (
    <div>
      <SectionTitle Heading={"payment"} />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box my-6 bg-white py-3">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab font-semibold"
          aria-label="STRIPE"
          defaultChecked
        />
        <div className="tab-content bg-white border-gray-300 rounded-2xl p-6 m-6">
          <div className="my-10 mx-auto">
            <Elements stripe={stripePromise}>
              <CheckOutForm />
            </Elements>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab font-semibold"
          aria-label="SSL COMMERZ"
        />
        <div className="tab-content bg-white border-gray-300 rounded-2xl p-6 m-6">
          <SSLCheckOutForm />
        </div>
      </div>
    </div>
  );
};

export default Payment;
