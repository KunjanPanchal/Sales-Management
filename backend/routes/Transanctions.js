import express from "express";
import TransactionData from "../models/TransactionData.js";

const router = express.Router();

router.use("/", async (req, res) => {
    const { month, search, page = 1, perPage = 4 } = req.query;
    const date = new Date(`${month} 1, 2022`);

    const monthAsNumber = date.getMonth() + 1;
    let filter = {
        $expr: {
            $eq: [{ $month: "$dateOfSale" }, monthAsNumber]
        }
    };
    if (search) {
        filter.$or = [
            { title: new RegExp(search, "i") },
            { description: new RegExp(search, "i") },
            { price: parseFloat(search) || 0 },
        ];
    }
    const transactions = await TransactionData.find(filter)
        .skip((page - 1) * perPage)
        .limit(Number(perPage));
    res.json(transactions);
})

export default router;