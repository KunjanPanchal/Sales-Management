import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import './BarChart.css'

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
    <div className='barchart'>
      <h2>Bar Chart - {month}</h2>
      <ResponsiveContainer height={500}>
        <BarChart data={data}>
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent
