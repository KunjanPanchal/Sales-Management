import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import './PieChart.css'

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
    <div className='piechart'>
      <h2>Pie Chart - {month}</h2>
      <ResponsiveContainer height={500}>
        <PieChart>
          <Pie data={data} dataKey="count" nameKey="_id" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="category">
        {data.map((entry, index) => (
          <div key={index} className="category-item">
            <span className="category-color" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
            {entry._id} ({entry.count} items)
          </div>
        ))}
      </div>
    </div>
  )
}

export default PieChartComponent
