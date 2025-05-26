import express from 'express'
import TransactionData from '../models/TransactionData.js'

const router = express.Router();

router.use('/', async (req, res) => {
    const { month } = req.query;
    const date = new Date(`${month} 1, 2022`);

    const monthAsNumber = date.getMonth() + 1;

    let totalSalesOfMonth = await TransactionData.aggregate([
        {
            $match: {
                $expr: {
                    $eq: [{ $month: "$dateOfSale" }, monthAsNumber]
                }
            }
        },
        {
            $group: {
                _id: null,
                totalSales: { $sum: "$price" }
            }
        }
    ]);

    const totalSoldItems = await TransactionData.countDocuments({
        $expr: {
            $eq: [{ $month: "$dateOfSale" }, monthAsNumber]
        },
        sold: true
    });

    const notSoldItems = await TransactionData.countDocuments({
        $expr: {
            $eq: [{ $month: "$dateOfSale" }, monthAsNumber]
        },
        sold: false
    });


    res.json({
        totalSalesOfMonth: totalSalesOfMonth[0].totalSales,
        totalSoldItems: totalSoldItems,
        notSoldItems: notSoldItems
    });
});

export default router;