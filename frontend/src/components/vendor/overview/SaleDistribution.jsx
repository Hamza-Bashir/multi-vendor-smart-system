import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Electronics", value: 400 },
  { name: "Fashion", value: 300 },
  { name: "Sports", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

export default function SalesDistributionPie() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow w-[550px] h-[400px]">
      <h2 className="text-lg font-semibold mb-4">Sales Distribution by Category</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
