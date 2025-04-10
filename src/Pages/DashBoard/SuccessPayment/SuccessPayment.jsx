import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router";
import { useRef } from "react";
import { toJpeg } from "html-to-image";
import logo from "../../../assets/logo.png";

const SuccessPayment = () => {
  const AxiosSecure = useAxiosSecure();

  const { transId } = useParams();
  const { data: paymentDetails = {}, isPending } = useQuery({
    queryKey: ["payment-details"],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/payment-details?transID=${transId}`);
      return res.data;
    },
  });
  console.log(paymentDetails);
  const totalPrice =
    !isPending &&
    paymentDetails.itemsDetails.reduce((total, item) => {
      return total + item.price;
    }, 0);

  const receiptRef = useRef();

  const handleDownload = () => {
    toJpeg(receiptRef.current, { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };
  return (
    <div>
      {isPending ? (
        <>
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </>
      ) : (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <div className="card lg:w-[600px] max-w-md  bg-white shadow-sm">
            <div className="card-body p-2">
              <div ref={receiptRef} className="bg-white lg:p-4 p-2.5">
                <div className="text-center  mb-6 space-y-2.5 border-b-2 border-gray-400 py-2.5">
                  <img src={logo} alt="logo" className="mx-auto" />
                  <h2 className="text-4xl font-semibold">Payment Receipt</h2>
                  <p className="text-sm text-gray-500">
                    Thank you for your purchase!
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="font-bold text-gray-700 mb-2">
                    Payment Information
                  </h2>
                  <div className="px-3.5">
                    <div className="flex justify-between mb-2 ">
                      <span className="font-medium text-gray-700">
                        Transaction Id:
                      </span>
                      <span>{paymentDetails.paymentDetails.transactionId}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">Date:</span>
                      <span>{paymentDetails.paymentDetails.date}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">
                        Customer Email:
                      </span>
                      <span>{paymentDetails.paymentDetails.email}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6 ">
                  <h2 className="font-bold text-gray-700 mb-2">
                    Items Information
                  </h2>
                  <div className="px-3.5 space-y-2">
                    <div className="space-y-2">
                      {paymentDetails.itemsDetails.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span>{item.name}</span>
                          <span>${item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-lg font-medium">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleDownload}
                  className="btn btn-primary w-full py-2 mt-4"
                >
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessPayment;
