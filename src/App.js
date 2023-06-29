import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarFunction from "./Navbar/Navbar.js";
import CardDetails from "./Card/Card.js";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import IncomeReportMonthly from "./IncomeReport/IncomeReportMonth";
import IncomeReportYearly from "./IncomeReport/IncomeReportYear";
import IncomeReportWeekly from "./IncomeReport/IncomeReportWeek";
import ExpenseReportMonthly from "./Expense report/expensemonth";
import ExpenseReportYearly from "./Expense report/expensereportyearly";
import ExpenseReportweekly from "./Expense report/Expensereportweek";
import IncomeCreateDetails from "./Addincome/addincome";
import ExpenseCreateDetails from "./AddExpense/addexpense";

function App() {
  const incomedata =
    "https://money-manager-backend-delta.vercel.app/get/Incomedata";
  const expensedata =
    "https://money-manager-backend-delta.vercel.app/get/expensedata";

  const [Incomedata, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    const getIncomeData = async () => {
      try {
        const response = await fetch(incomedata, {
          method: "GET",
        });
        const data = await response.json();
        setIncome(data);

        const response1 = await fetch(expensedata, {
          method: "GET",
        });
        const Expensedata = await response1.json();
        setExpense(Expensedata);
      } catch (error) {
        console.log(error);
      }
    };
    getIncomeData();
  }, []);

  return (
    <div className="App">
      <div className="head">
        <h1 className="NavHeading">History Of Income and Expenditure</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <CardDetails expense={expense} income={Incomedata} />
        </Route>
        <Route path="/month">
          <IncomeReportMonthly income={incomedata} />
        </Route>
        <Route path="/year">
          <IncomeReportYearly income={incomedata} />
        </Route>
        <Route path="/week">
          <IncomeReportWeekly income={incomedata} />
        </Route>
        <Route path="/expense/month">
          <ExpenseReportMonthly expense={expensedata} />
        </Route>
        <Route path="/expense/year">
          <ExpenseReportYearly expense={expensedata} />
        </Route>
        <Route path="/expense/week">
          <ExpenseReportweekly expense={expensedata} />
        </Route>
        <Route path="/add/income">
          <IncomeCreateDetails setIncome={setIncome} Incomedata={Incomedata} />
        </Route>
        <Route path="/add/expense">
          <ExpenseCreateDetails
            setExpensedetails={setExpense}
            expensedetails={expense}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
