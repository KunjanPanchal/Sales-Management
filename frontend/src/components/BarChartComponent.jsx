import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BarChartComponent = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(`https://sales-management-backend-bw9z.onrender.com/api/barchartdata?month=${month}`);
        let tra = await res.json();
        setData(tra)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [month])
  return (
    <div className="barchart px-4 py-8 bg-white shadow-lg rounded-lg mt-10 w-[50%]">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    📊 Bar Chart - {month}
  </h2>

  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} className="text-sm">
      <XAxis dataKey="range" tick={{ fill: '#4B5563' }} />
      <YAxis tick={{ fill: '#4B5563' }} />
      <Tooltip
        contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "0.5rem", borderColor: "#e5e7eb" }}
        cursor={{ fill: "#e0f2fe" }}
      />
      <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>

  )
}

export default BarChartComponent
