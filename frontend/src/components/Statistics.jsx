import React, { useEffect, useState } from 'react'
// import './Statistics.css'

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
        <div className="statistic-container bg-white shadow-lg rounded-lg p-6 mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                📈 Statistics - {month}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-700">Total Sales</h3>
                    <p className="text-2xl font-bold text-blue-800 mt-2">
                        ${statisticsData.totalSalesOfMonth}
                    </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-700">Sold Items</h3>
                    <p className="text-2xl font-bold text-green-800 mt-2">
                        {statisticsData.totalSoldItems}
                    </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-700">Not Sold Items</h3>
                    <p className="text-2xl font-bold text-red-800 mt-2">
                        {statisticsData.notSoldItems}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Statistics
