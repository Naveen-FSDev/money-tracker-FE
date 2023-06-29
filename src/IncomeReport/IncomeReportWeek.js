import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import NavBarFunction from "../Navbar/Navbar.js";

const IncomeReportWeekly = ({ income }) => {
  const [monthincome, setmonthincome] = useState([]);
  const [monthexpense, setmonthexpense] = useState([]);
  const [incomevalue, setincomevalue] = useState();
  const [expensevalue, setExpensevalue] = useState();

  const getweekincomedata = async () => {
    try {
      const response = await fetch(`${income}?week=${incomevalue}`, {
        method: "GET",
      });
      const data = await response.json();
      setmonthincome(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="month">
      <NavBarFunction>
        <input
          onChange={(e) => setincomevalue(e.target.value)}
          value={incomevalue}
          className="inputfield"
          placeholder="Enter Week2,Week1,Week3"
        />
        <button onClick={getweekincomedata} className="btn1">
          click
        </button>
        <div className="ClassComponent">
          <div id="CardBoxContainor" className="monthreport">
            {monthincome.map((data) => (
              <Card
                className="cardBox"
                style={{ width: "18rem" }}
                key={data._id}
              >
                <Card.Header className="CardTitleHeader">
                  IncomeData
                </Card.Header>
                <Card.Body>
                  <Card.Text>Categories :{data.categories}</Card.Text>
                  <Card.Text>Income :{data.income}</Card.Text>
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

export default IncomeReportWeekly;
