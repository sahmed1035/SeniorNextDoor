import React, { Component } from "react";
import API from "../utils/API";
import "./contactStyle.css";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from "../components/Card";

// import Calendar from 'react-calendar';



class FormServiceRequest extends Component {
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
        this.setState({ services: res.data, title: "", time: "", zip: "", notes: "", date: "", available: "" })
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
    this.setState({ [name]: value });
  };

  onClickCalander = date => {

    this.setState({ date: this.state.date })
  };

  onblur = event=>{
  const value  = event.target.value;
 
  this.setState({ date: value })

   alert(value)
 }


  handleFormSubmit = event => {
    event.preventDefault();
    // alert("Hello from handleFormSubmit");
    if (this.state.title && this.state.zip) {
      API.saveService({
        title: this.state.title,
        zip: this.state.zip,
        notes: this.state.notes,
        date: this.state.date,
        time: this.state.time,
        requesterId: sessionStorage.getItem("userObjectId")
      },JSON.parse(sessionStorage.volunteerData)._id)
        .then(res => this.loadServices())
        .catch(err => console.log(err));
    }

    // Insert manual reference here to 'join' the collections
// get user's object id..?
// api.get(id)

    API.appendGoogleId({})

    // db.collectionName.update({“first_name”: “Prashant”}, {$set: {“sir_name”: “Patil”}}, {multi: true})

  };


  render() {
    console.log('users obj id')
    console.log(sessionStorage.getItem("userObjectId"))

    return (
      <div className="container " style={{width:'90%', background:'white', height:'80%', border:'2px solid', boxShadow:'none', marginTop:'4%'}}>
 
        <Card style={{borderColor:'white'}}>
          <div className="cardHeader" >
          <h1 className=" title ">What Assistance Would You Like To Request For?</h1>
          </div>
          <div id="card-body" className="cardBody">

            <form >
              <Input
      
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Assistance Needed (required)"
               
              />
              <Input
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="Zip (required)"
              />


              
                <Input
                  id="datepicker"
                  readonly
                  type="date"  
                  name="date"
                  onChange={this.handleInputChange}
                  
                  placeholder="Date(required)"

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
                // disabled={!(this.state.zip && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Assistance Request
              </FormBtn>

            </form>
          </div>
        </Card>
      </div>
    );
  }
}

export default FormServiceRequest;
