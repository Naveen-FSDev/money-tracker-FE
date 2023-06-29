import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import NavBarFunction from "../Navbar/Navbar";

function IncomeCreateDetails({ setIncome, Incomedata }) {
  const [income, setincome] = useState("");
  const [categories, setcategories] = useState("");
  const [description, setdescription] = useState("");
  const [week, setweek] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const history = useHistory();

  const addincome = async () => {
    try {
      const details = {
        income,
        categories,
        description,
        week,
        month,
        year,
        date,
        time,
      };
      const response = await fetch(
        "https://money-manager-backend-delta.vercel.app/get/Incomedata",
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setIncome([...Incomedata, data]);

      setincome("");
      setcategories("");
      setdescription("");
      setweek("");
      setmonth("");
      setyear("");
      setdate("");
      settime("");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavBarFunction>
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Income</Form.Label>
            <br />
            <input
              className="Forminput"
              placeholder="Enter your Income"
              onChange={(event) => setincome(event.target.value)}
              value={income}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Categories</Form.Label>
            <br />
            <input
              className="Forminput"
              placeholder="Enter Categories"
              onChange={(event) => setcategories(event.target.value)}
              value={categories}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Description</Form.Label>
            <br />
            <input
              className="Forminput"
              placeholder="Enter Description"
              onChange={(event) => setdescription(event.target.value)}
              value={description}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Week</Form.Label>
            <br />
            <input
              className="Forminput"
              placeholder="Enter Week"
              onChange={(event) => setweek(event.target.value)}
              value={week}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Month</Form.Label>
            <br />
            <input
              className="Forminput"
              placeholder="Enter Month"
              onChange={(event) => setmonth(event.target.value)}
              value={month}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Year</Form.Label>
            <br />
            <input
              className="Forminput"
              placeholder="Enter Year"
              onChange={(event) => setyear(event.target.value)}
              value={year}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Date</Form.Label>
            <br />
            <input
              className="Forminput"
              placeholder="Enter Date"
              onChange={(event) => setdate(event.target.value)}
              value={date}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="Forminput" htmlFor="disabledTextInput">
              Time
            </Form.Label>
            <br />
            <input
              placeholder="Enter Time"
              onChange={(event) => settime(event.target.value)}
              value={time}
            />
          </Form.Group>

          <Button onClick={addincome}>Submit</Button>
        </fieldset>
      </Form>
    </NavBarFunction>
  );
}

export default IncomeCreateDetails;
