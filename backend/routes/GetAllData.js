import express from 'express';

const router = express.Router();

router.use('/', async (req, res) => {
    const { month } = req.query
    let t = await fetch(`http://localhost:3000/api/transactions?month=${month}`);
    let transactions = await t.json();

    const s = await fetch(`http://localhost:3000/api/statistics?month=${month}`);
    let statistics = await s.json();

    const b = await fetch(`http://localhost:3000/api/barchartdata?month=${month}`);
    const barChartData = await b.json();

    const p = await fetch(`http://localhost:3000/api/piechartdata?month=${month}`);
    const pieChartData = await p.json();


    res.json({
        transactions: transactions,
        statistics: statistics,
        barChartData: barChartData,
        pieChartData: pieChartData
    });
})
export default router;