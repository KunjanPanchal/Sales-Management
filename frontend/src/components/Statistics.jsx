import React, { useEffect, useState } from 'react'
import './Statistics.css'

const Statistics = ({ month }) => {
    const [statisticsData, setStatisticsData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await fetch(`https://sales-management-backend-bw9z.onrender.com/api/statistics?month=${month}`);
                let tra = await res.json();
                setStatisticsData(tra)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [month])
    return (
        <div className='statistic-container'>
            <h2>Statistics - {month}</h2>
            <div className="numbers">
                <h3>Total sale : {statisticsData.totalSalesOfMonth}</h3>
                <h3>Total sold items : {statisticsData.totalSoldItems}</h3>
                <h3>Total not sold items : {statisticsData.notSoldItems}</h3>
            </div>
        </div>
    )
}

export default Statistics
