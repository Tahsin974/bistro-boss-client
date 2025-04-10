import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckOutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCart from "../../../../Hooks/useCart";
import useAuthContext from "../../../../Hooks/useAuthContext";
import Swal from "sweetalert2";
import moment from "moment/moment";
import { useNavigate } from "react-router";

const CheckOutForm = () => {
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const { cart, refetch } = useCart();
  const { user } = useAuthContext();
  const price = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  console.log(price);

  // Payment Intent
  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError(" ");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${confirmError.message}`,
      });
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const payment = {
          email: user.email,
          transactionId: paymentIntent.id,
          date: moment(new Date()).format("MMMM Do YYYY"),
          price: price,
          cartIDs: cart.map((item) => item._id),
          menuIDs: cart.map((item) => item.menuId),
        };
        const res = await axiosSecure.post(
          `/payments?email=${user?.email}`,
          payment
        );
        if (res.data.paymentResult.insertedId) {
          const Toast = Swal.mixin({
            background: "green",
            color: "white",
            theme: "dark",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            title: "Payment successfully Done",
          });
          refetch();
          navigate("/dashboard/payment-history");
        }
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="card fieldset w-full bg-[#F3F3F3] border border-[#F3F3F3] p-4 rounded-box shadow-lg   "
      >
        <div className="space-y-2 my-3.5">
          <h3 className="text-xl font-semibold text-black">Payment Details</h3>
          <p className="text-gray-400 font-semibold text-base">
            Complete your order by providing your payment details.
          </p>
        </div>
        <div className="bg-white">
          <CardElement
            className=" p-3"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "black",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-neutral text-white my-7"
          disabled={!stripe || !elements || !clientSecret || !cart.length}
        >
          Pay
        </button>
        <p className="text-error">{error}</p>
      </form>
    </div>
  );
};

export default CheckOutForm;
