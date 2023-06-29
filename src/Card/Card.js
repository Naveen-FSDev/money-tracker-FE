import Card from "react-bootstrap/Card";
import NavBarFunction from "../Navbar/Navbar";

function CardDetails({ income, expense }) {
  return (
    <NavBarFunction>
      <div className="ClassComponent">
        <div id="CardBoxContainor">
          <h3 className="CardHeader">Income Data</h3>
          {income.map((data) => (
            <Card className="cardBox" style={{ width: "18rem" }} key={data._id}>
              <Card.Header className="CardTitleHeader">IncomeData</Card.Header>
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

        <div id="CardBoxContainor">
          <h3 className="CardHeader">Expense Data</h3>
          {expense.map((data) => (
            <Card style={{ width: "18rem" }} key={data._id} className="cardBox">
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
  );
}

export default CardDetails;
