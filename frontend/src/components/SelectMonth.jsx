import React from 'react'
import './SelectMonth.css'

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const SelectMonth = ({ month, setMonth }) => {
    return (
        <div className='select-month'>
            <select name="" id="" value={month} onChange={(e) => setMonth(e.target.value)}>
                {months.map((item) => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectMonth
