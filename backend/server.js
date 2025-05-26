import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import fetchData from "./routes/FetchData.js";
import transactions from "./routes/Transanctions.js"
import statistics from './routes/Statistics.js'
import barChartData from './routes/BarChartData.js'
import pieChartData from './routes/PieChartData.js'
import getAllData from './routes/GetAllData.js'
import dotenv from "dotenv"
dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors());
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("database connected")).catch((err) => console.log("There is some error", err));

app.use('/api/fetchdata', fetchData);
app.use('/api/transactions', transactions);
app.use('/api/statistics', statistics);
app.use('/api/barchartdata', barChartData);
app.use('/api/piechartdata', pieChartData);
app.use('/api/getalldata', getAllData);

app.use('/', (req, res) => {
  res.send("Hello world");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})