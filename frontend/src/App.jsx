import { useEffect, useState } from 'react'
import SelectMonth from './components/SelectMonth';
import Search from './components/Search';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChartComponent from './components/BarChartComponent';
import PieChartComponent from './components/PieChartComponent';
import './App.css'

function App() {
  const [month, setMonth] = useState("January");
  const [search, setSearch] = useState("");

  return (
    <div className='dashboard'>
      <h1 className='heading'>Sales Dashboard</h1>
      <div className="setQuery">
        <SelectMonth month={month} setMonth={setMonth} />
        <Search search={search} setSearch={setSearch} />
      </div>
      <TransactionTable month={month} search={search} />
      <Statistics month={month} />
      <div className='charts'>
        <BarChartComponent month={month} />
        <PieChartComponent month={month} />
      </div>

    </div>
  )
}

export default App
