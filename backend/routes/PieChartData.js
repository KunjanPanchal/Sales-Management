import express from 'express'
import TransactionData from '../models/TransactionData.js'

const router = express.Router();

router.use('/', async (req, res) => {
    const { month } = req.query;
    let date = new Date(`${month} 1, 2022`);
    let monthAsNum = date.getMonth() + 1;

    const data = await TransactionData.aggregate([
        {
            $match: {
                $expr: { $eq: [{ $month: "$dateOfSale" }, monthAsNum] }
            }
        },
        {
            $group: {
                _id: "$category",
                count: { $sum: 1 }
            }
        }
    ]);
    res.send(data);
})

export default router;