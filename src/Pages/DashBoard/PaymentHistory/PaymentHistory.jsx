import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuthContext from "../../../Hooks/useAuthContext";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const { data: paymentHistory = [], isPending } = useQuery({
    queryKey: [axiosSecure, user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payment-history?email=${user?.email}`
      );
      return res.data;
    },
  });
  console.log(paymentHistory);
  return (
    <div>
      <SectionTitle Heading={"PAYMENT HISTORY"} />
      <div className="bg-white p-5 my-20 space-y-7">
        {isPending ? (
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <>
            <h3 className="text-5xl font-semibold">
              Total Payments: {paymentHistory.length}
            </h3>
            <div className="overflow-x-auto rounded-lg border">
              <table className="table">
                {/* head */}
                <thead className="bg-[#D1A054] text-white">
                  <tr>
                    <th>TRANSACTION ID</th>
                    <th>EMAIL</th>
                    <th>TOTAL PRICE</th>
                    <th>PAYENT DATE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment) => (
                    <tr key={payment._id}>
                      <th>{payment.transactionId}</th>
                      <th>{payment.email}</th>
                      <td>{payment.price}</td>
                      <td>{payment.date}</td>
                      <td>
                        <button className="btn btn-neutral btn-xs">
                          Pending
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
