import React, { useEffect, useState } from 'react'
// import './TransactionsTable.css'

const TransactionTable = ({ month, search }) => {
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await fetch(`https://sales-management-backend-bw9z.onrender.com/api/transactions?month=${month}&search=${search}&page=${page}`);
                let tra = await res.json();
                // console.log(tra)    
                setTransactions(tra)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();

    }, [month, search, page])
    return (
        <div className="transactions px-4 py-8 bg-gray-100">
            <div className="transaction-heading mb-6">
                <h2 className="text-3xl font-bold text-gray-800">📦 Transactions - {month}</h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full text-sm text-gray-700">
                    <thead className="bg-blue-600 text-white text-left">
                        <tr>
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Description</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Sold</th>
                            <th className="px-4 py-3">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.map((item) => (
                                <tr
                                    key={item._id}
                                    className="even:bg-gray-50 odd:bg-white border-b border-gray-200 hover:bg-gray-100 transition-all"
                                >
                                    <td className="px-4 py-3 font-medium">{item.id}</td>
                                    <td className="px-4 py-3 font-semibold">{item.title}</td>
                                    <td className="px-4 py-3 max-w-sm">{item.description}</td>
                                    <td className="px-4 py-3 text-green-600 font-semibold">${item.price}</td>
                                    <td className="px-4 py-3 capitalize">{item.category}</td>
                                    <td className="px-4 py-3">
                                        {item.sold ? (
                                            <span className="text-green-700 font-bold">Yes</span>
                                        ) : (
                                            <span className="text-red-600 font-bold">No</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">
                                        <img
                                            src={item.image}
                                            alt="product"
                                            className="w-16 h-16 object-contain rounded-lg mx-auto border border-gray-200"
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-6 text-gray-500">
                                    No data found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="pagination flex justify-center gap-4 mt-8">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage(page + 1)}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default TransactionTable
