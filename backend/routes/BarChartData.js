import express from 'express';
import TransactionData from '../models/TransactionData.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const { month } = req.query;
    let date = new Date(`${month} 1, 2022`)
    let monthAsNum = date.getMonth() + 1;

    const priceRanges = [
        { range: "0-100", min: 0, max: 100 },
        { range: "101-200", min: 101, max: 200 },
        { range: "201-300", min: 201, max: 300 },
        { range: "301-400", min: 301, max: 400 },
        { range: "401-500", min: 401, max: 500 },
        { range: "501-600", min: 501, max: 600 },
        { range: "601-700", min: 601, max: 700 },
        { range: "701-800", min: 701, max: 800 },
        { range: "801-900", min: 801, max: 900 },
        { range: "901-above", min: 901, max: Infinity },
    ];

    const promises = priceRanges.map(({ range, min, max }) =>
        TransactionData.countDocuments({
            $expr: {
                $eq: [{ $month: "$dateOfSale" }, monthAsNum]
            },
            price: { $gte: min, $lte: max },
        }).then(count => ({ range, count }))
    );

    const barData = await Promise.all(promises);

    res.json(barData);

})
export default router;