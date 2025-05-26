import React, { useEffect, useState } from 'react'
import './TransactionsTable.css'

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
        <div className='transactions'>
            <div className='transaction-heading'>
                <h2>Transactions - {month}</h2>
            </div>
            <table className='transaction-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((item) => (
                            <tr key={item._id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.sold ? "Yes" : "No"}</td>
                                <td><img src={item.image} alt="no img" width="100px" height="100px" /></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>No data Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    )
}

export default TransactionTable
