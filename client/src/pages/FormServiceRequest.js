import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from "../components/Card";


class FormServiceRequest  extends Component {
  state = {
    services: [],
    title: "",
    time: "",
    zip: "",
    notes: "",
    date: "",
    available: false
  };

  componentDidMount() {
    this.loadServices();
  }

  loadServices = () => {
    API.getServices()
      .then(res =>
        this.setState({ services: res.data, title: "", time:"", zip: "", notes: "", data: "", available:"" })
      )
      .catch(err => console.log(err));
  };

  deleteService = id => {
    API.deleteService(id)
      .then(res => this.loadServices())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // alert("Hello from handleFormSubmit");
    if (this.state.title && this.state.zip) {
      API.saveService({
        title: this.state.title,
        zip: this.state.zip,
        notes: this.state.notes,
        date: this.state.date,
        time: this.state.time
      })
        .then(res => this.loadServices())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div id = "cardBody" >

    
      <Container fluid >
        <Row>
          <Col size="md-12">
            <Card>
              <h1>What Service Would You Like to Request For?</h1>
           
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Service Title (required)"
              />
              <Input
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="Zip (required)"
              />
               <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (required)"
              />
               <Input
                value={this.state.time}
                onChange={this.handleInputChange}
                name="time"
                placeholder="Time (Optional)"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Notes (Optional)"
              />
              <FormBtn
                disabled={!(this.state.zip && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Service Request
              </FormBtn>
            </form>
            </Card>
          </Col>
         
        </Row>
      </Container>
      </div>
    );
  }
}

export default FormServiceRequest;
