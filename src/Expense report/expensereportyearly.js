import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import NavBarFunction from "../Navbar/Navbar.js";

const ExpenseReportYearly = ({ expense }) => {
  const [monthexpense, setmonthexpense] = useState([]);
  const [expensevalue, setExpensevalue] = useState();

  const getyearlyexpensedata = async () => {
    try {
      const response = await fetch(`${expense}?year=${expensevalue}`, {
        method: "GET",
      });
      const data = await response.json();
      setmonthexpense(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="month">
      <NavBarFunction>
        <input
          onChange={(e) => setExpensevalue(e.target.value)}
          className="inputfield"
          placeholder="Enter year like 2023"
        />
        <button onClick={getyearlyexpensedata} className="btn1">
          click
        </button>
        <div className="ClassComponent">
          <div id="CardBoxContainor" className="monthreport">
            {monthexpense.map((data) => (
              <Card
                style={{ width: "18rem" }}
                key={data._id}
                className="cardBox"
              >
                <Card.Header className="CardTitleHeader">
                  Expense Data
                </Card.Header>
                <Card.Body>
                  <Card.Text>Categories :{data.categories}</Card.Text>
                  <Card.Text>Purpose of Use :{data.usedfor}</Card.Text>
                  <Card.Text>Expense :{data.income}</Card.Text>
                  <Card.Text>Desc :{data.description}</Card.Text>
                  <Card.Text>Date :{data.date}</Card.Text>
                  <Card.Text>Time :{data.time}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </NavBarFunction>
    </div>
  );
};

export default ExpenseReportYearly;
