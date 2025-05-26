import express from 'express';
import TransactionData from '../models/TransactionData.js';

const router = express.Router();

router.use("/", async (req, res) => {
    try {
        const responce = await fetch("https://s3.amazonaws.com/roxiler.com/product_transaction.json")
        const data = await responce.json();
        await TransactionData.deleteMany({});
        await TransactionData.insertMany(data);
        res.send("data added succesfully in database")
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export default router;