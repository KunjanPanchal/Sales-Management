import express from 'express';

const router = express.Router();

router.use('/', async (req, res) => {
    const { month } = req.query
    let t = await fetch(`https://sales-management-backend-bw9z.onrender.com/api/transactions?month=${month}`);
    let transactions = await t.json();

    const s = await fetch(`https://sales-management-backend-bw9z.onrender.com/api/statistics?month=${month}`);
    let statistics = await s.json();

    const b = await fetch(`https://sales-management-backend-bw9z.onrender.com/api/barchartdata?month=${month}`);
    const barChartData = await b.json();

    const p = await fetch(`https://sales-management-backend-bw9z.onrender.com/api/piechartdata?month=${month}`);
    const pieChartData = await p.json();


    res.json({
        transactions: transactions,
        statistics: statistics,
        barChartData: barChartData,
        pieChartData: pieChartData
    });
})
export default router;