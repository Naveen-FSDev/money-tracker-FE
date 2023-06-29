import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import NavBarFunction from "../Navbar/Navbar.js";

const IncomeReportMonthly = ({ income }) => {
  const [monthincome, setmonthincome] = useState([]);
  const [incomevalue, setincomevalue] = useState();

  const getmonthlyincomedata = async () => {
    try {
      const response = await fetch(`${income}?month=${incomevalue}`, {
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
          className="inputfield"
          placeholder="Enter Januray,March like start letter with capital"
        />
        <button onClick={getmonthlyincomedata} className="btn1">
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

export default IncomeReportMonthly;
