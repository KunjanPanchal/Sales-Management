# MERN Stack Sales Dashboard

A full-stack web application using **MERN Stack** that fetches transaction data from a third-party API, stores it in MongoDB, and displays statistics, a transactions table, and charts on the frontend.

## 📌 Features
- **Backend (Node.js + Express + MongoDB)**
  - Fetches and stores transaction data from a third-party API.
  - Supports search and pagination.
  - Provides statistics on total sales, sold and unsold items.
  - Generates bar charts for price ranges.
  - Generates pie charts for category distribution.
  - Combines all data into a single API endpoint.
- **Frontend (React + Vite)**
  - Displays a transactions table with search and pagination.
  - Shows statistics for selected months.
  - Includes a bar chart for price ranges.
  - Includes a pie chart with category distribution and a legend.

## 🏗️ Tech Stack
- **Frontend:** React, Vite, Recharts
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Database:** Local MongoDB

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/KunjanPanchal/Roxiler-System.git
cd Roxiler-System
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

#### Start Backend Server
```bash
npm start
```
_Server runs at_ **`http://localhost:3000/`**

---

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```

#### Start Frontend Server
```bash
npm run dev
```
_Frontend runs at_ **`http://localhost:5173/`**

---

## 📡 API Endpoints (Backend)
| Method | Endpoint | Description |
|--------|----------------------|--------------------------------------|
| `GET` | `/api/fetchdata` | Fetch and store third-party API data |
| `GET` | `/api/transactions?month=March&page=1&perPage=10&search=laptop` | Get transactions with search & pagination |
| `GET` | `/api/statistics?month=March` | Get sales statistics for selected month |
| `GET` | `/api/barchartdata?month=March` | Get price range distribution |
| `GET` | `/api/piechartdata?month=March` | Get category-wise item count |
| `GET` | `/api/getalldata?month=March` | Get combined data |

---

## 📊 Frontend Components
| Component | Description |
|-----------|------------|
| `TransactionsTable` | Displays transaction list with search & pagination |
| `Statistics` | Shows total sales, sold & unsold items |
| `BarChartComponent` | Displays price range distribution in a bar chart |
| `PieChartComponent` | Shows category-wise distribution with a legend |
| `MonthSelector` | Dropdown for selecting the month |

---

## Screenshot
![Image](https://github.com/user-attachments/assets/0328d2af-fa92-4508-ad50-2145260b6f1b)

# Happy Coding! 🚀

