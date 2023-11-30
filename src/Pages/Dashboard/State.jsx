import { FaCommentDots, FaRegUser } from "react-icons/fa";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { BsPostcard } from "react-icons/bs";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   PieChart,
//   Pie,
//   Legend,
// } from "recharts";
// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const State = () => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState();
  const [comment, setComment] = useState();
  const [post, setPost] = useState();

  // const { data: user = {} } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     axiosSecure.get("/users").then((res) => res.data);
  //   },
  // });

  const commentData = () => {
    axiosSecure.get("/comment").then((res) => {
      setComment(res.data);
    });
    axiosSecure.get("/posts").then((res) => {
      setPost(res.data);
    });
    axiosSecure.get("/users").then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  };

  useEffect(() => {
    commentData();
  }, []);

  // const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({
  //   cx,
  //   cy,
  //   midAngle,
  //   innerRadius,
  //   outerRadius,
  //   percent,
  // }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <text
  //       x={x}
  //       y={y}
  //       fill="white"
  //       textAnchor={x > cx ? "start" : "end"}
  //       dominantBaseline="central"
  //     >
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };

  // const PieChartData = post.map((data) => {
  //   return { name: data.length, value: data.revenue };
  // });

  return (
    <div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title flex gap-3">
            User <FaRegUser />
          </div>
          <div className="stat-value">{user?.length}</div>
        </div>

        <div className="stat">
          <div className="stat-title flex gap-3">
            Posts
            <BsPostcard />
          </div>
          <div className="stat-value">{post?.length}</div>
        </div>

        <div className="stat">
          <div className="stat-title flex gap-3">
            Comments
            <FaCommentDots />
          </div>
          <div className="stat-value">{comment?.length}</div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center mx-auto">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
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
              {chartData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={PieChartData}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {PieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>{" "}
            <Legend></Legend>
          </PieChart>
        </div>
      </div> */}
    </div>
  );
};

export default State;
