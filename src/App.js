import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form,
  Table,
} from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketNumber: "",
      items: [],
    };
    this.generateRandomTicket = this.generateRandomTicket.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTicketList = this.addTicketList.bind(this);
  }

  handleChange(event) {
    this.setState({ ticketNumber: event.target.value });
  }

  maxLengthCheck = (event) => {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
  };

  addTicketList(e) {
    debugger;
    e.preventDefault();
    let items = [...this.state.items];
    items.push({ ticketNumber: this.state.ticketNumber });
    this.setState({
      items,
      ticketNumber: "",
    });
  }

  generateRandomTicket() {
    var minNum = 100000;
    var maxNum = 999999;
    this.setState((state) => ({
      ticketNumber: Math.floor(Math.random() * (maxNum - minNum + 1) + minNum),
    }));
  }

  render() {
    const myButtonStyle = {
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "300px",
    };
    return (
      <React.Fragment>
        <Container className="app">
          <Row>
            <header>
              <h1>
                <center>Ticket Generating System</center>
              </h1>
            </header>
          </Row>

          <Row>
            <Col sm={4}>
              <Form onSubmit={this.addTicketList}>
                <InputGroup size="lg">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">
                      Ticket
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Ticket Number"
                    maxLength="6"
                    onInput={this.maxLengthCheck}
                    value={this.state.ticketNumber}
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <Button
                  style={myButtonStyle}
                  size={"lg"}
                  variant="primary"
                  type="submit"
                  value="Submit"
                >
                  Add
                </Button>
              </Form>
            </Col>

            <Col xs lg="2"></Col>

            <Col sm={4}>
              <Button
                size={"lg"}
                variant="warning"
                onClick={this.generateRandomTicket}
              >
                Generate Ticket
              </Button>
            </Col>
          </Row>

          <Row>
            <ListTable items={this.state.items} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

class ListTable extends React.Component {
  render() {
    const items = this.props.items;
    var index = 1;
    return (
      <div>
        <h2>List of Ticket generated</h2>
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Ticket#</th>
              <th>Ticket Number</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {items.map((item) => {
              return (
                <tr>
                  <td>{index++}</td>
                  <td>{item.ticketNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
