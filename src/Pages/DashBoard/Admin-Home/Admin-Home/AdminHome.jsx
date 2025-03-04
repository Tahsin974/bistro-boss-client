import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../../Hooks/useAuthContext";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaBook, FaShippingFast, FaUsers, FaWallet } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {}, isPending } = useQuery({
    queryKey: [user?.email, "stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stats?email=${user?.email}`);
      return res.data;
    },
  });

  const { data: orderStats = [] } = useQuery({
    queryKey: [user?.email, "orderStats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order-stats?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(orderStats);

  const pieChartData = orderStats.map((stat) => {
    return { name: stat.category, value: stat.quantity };
  });
  console.log(pieChartData);

  // Custom shape for Bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Custom shape for PIE Chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      {isPending ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="space-y-10">
          <h3 className="text-3xl capitalize">
            hi, welcome {user?.displayName ? user?.displayName : "back"}
          </h3>
          {/* Admin Stats */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 ">
            <div className="stat rounded-lg  bg-gradient-to-r from-[#BB34F5] to-[#f79aff] flex items-center  p-3">
              <div>
                <FaWallet size={40} className="text-white" />
              </div>
              <div className="text-center">
                <div className="stat-title text-white">Revenue</div>
                <div className="stat-value text-white">${stats.revenue}</div>
              </div>
            </div>

            <div className="stat rounded-lg  bg-gradient-to-r from-[#D3A256] to-[#ffdc9a] flex items-center p-3">
              <div>
                <FaUsers size={40} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-white stat-title">Customers</div>
                <div className="stat-value text-white">{stats.customers}</div>
              </div>
            </div>

            <div className="stat rounded-lg  bg-gradient-to-r from-[#FE4880] to-[#ff9bd4] flex items-center p-3">
              <div>
                <FaBook size={40} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-white stat-title">MenuItems</div>
                <div className="stat-value text-white">{stats.menuItems}</div>
              </div>
            </div>
            <div className="stat rounded-lg bg-gradient-to-r from-[#6AAEFF] to-[#99f1fd] flex items-center p-3">
              <div>
                <FaShippingFast size={40} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-white stat-title">Orders</div>

                <div className="stat-value text-white">{stats.orders}</div>
              </div>
            </div>
          </div>
          {/* Order Stats */}
          <div className="grid lg:grid-cols-2 justify-items-center gap-4 items-center">
            {/* Bar chart */}
            <div>
              <BarChart
                width={400}
                height={300}
                data={orderStats}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />

                <YAxis />
                <Bar
                  dataKey="quantity"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {orderStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </div>
            {/* Pie chart */}
            <div>
              <PieChart width={400} height={400}>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;
