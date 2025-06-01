import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
// import './PieChart.css'

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#D7263D", "#A633FF", "#3BB273"];

const PieChartComponent = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(`https://sales-management-backend-bw9z.onrender.com/api/piechartdata?month=${month}`);
        let tra = await res.json();
        setData(tra)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [month])
  return (
    <div className="piechart bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🥧 Pie Chart - {month}
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-2/3">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                dataKey="count"
                nameKey="_id"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#3B82F6"
                label
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "0.5rem",
                  borderColor: "#e5e7eb",
                  fontSize: "0.875rem",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-3">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-3">
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="text-gray-700 text-sm font-medium">
                {entry._id} <span className="text-gray-500">({entry.count} items)</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default PieChartComponent
