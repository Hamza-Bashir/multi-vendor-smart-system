import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card, CardContent } from '@mui/material';

const SaleChart = () => {
  const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4000 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 7000 },
    { name: "Jul", sales: 5000 },
  ];

  return <>
    <Card className="shadow-md rounded-2xl w-[400px]">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Monthly Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  
  </>
};

export default SaleChart
