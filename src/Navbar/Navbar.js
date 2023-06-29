import { Children } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useHistory } from "react-router-dom";
import "../Navbar/Navbar.css";

function NavBarFunction({ children }) {
  const history = useHistory();

  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand
              className="NavHeaderComponent"
              onClick={() => history.push("/")}
            >
              Money Manager
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto drop">
                <NavDropdown title="Income Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    className="NavDropdown"
                    onClick={() => history.push("/month")}
                  >
                    Monthly report
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="NavDropdown"
                    onClick={() => history.push("/week")}
                  >
                    {" "}
                    Weekly Report
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="NavDropdown"
                    onClick={() => history.push("/year")}
                  >
                    Yearly Report
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Expense Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    className="NavDropdown"
                    onClick={() => history.push("/expense/month")}
                  >
                    Monthly report
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="NavDropdown"
                    onClick={() => history.push("/expense/week")}
                  >
                    Weekly Report
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="NavDropdown"
                    onClick={() => history.push("/expense/year")}
                  >
                    Yearly Report
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Add Button" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    className="NavDropdown"
                    onClick={() => history.push("/add/income")}
                  >
                    Income Details
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="NavDropdown"
                    onClick={() => history.push("/add/expense")}
                  >
                    Expense Details
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default NavBarFunction;
