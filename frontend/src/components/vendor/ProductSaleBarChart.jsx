import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Product A", sales: 2400 },
  { name: "Product B", sales: 1398 },
  { name: "Product C", sales: 9800 },
  { name: "Product D", sales: 3908 },
  { name: "Product E", sales: 4800 },
];

export default function ProductSalesBarChart() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow w-full mt-6 h-[400px]">
      <h2 className="text-lg font-semibold mb-4">Product Sales Comparison</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#8884d8" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
