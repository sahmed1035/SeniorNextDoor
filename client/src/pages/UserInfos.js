import React, {Component} from "react";
import API from "../utils/API";
//import Card from "../components/Card";
// import { Input, FormBtn } from "../components/Form";
//import Footer from "../components/Footer";

class UserInfos extends Component {

    state = {
        user: [],
        email: "",
        firstname: "",
        lastname: "",
        image: "",
        zip: "",
        userId: ""
      };

    constructor({ match }) {
        super()
        console.log("match: " + match)
        console.log("matchid: " + match.params.id)
        this.setState({ userId: match.params.id })
        this.state.userId = match.params.id
        console.log(this.state)
    }

    componentDidMount() {
        console.log('component mounted, id: ' + this.state.userId)
        API.getGoogleUser(JSON.parse(sessionStorage.volunteerData)._id).then((res) => {
            console.log("res in getGoogleUser: " + res)
            console.log(res.data)
            if(res.data.length === 0) { return }
            this.setState({
                email: res.data[0].email,
                firstname: res.data[0].name,
                lastname: res.data[0].family_name,
                image: res.data[0].picture,
                zip: res.data[0].zip
            })
        })
        console.log("storage" + sessionStorage.getItem("response"));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
        if (this.state.firstname && this.state.lastname) {
          API.saveUser({
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            zip : this.state.zip
          })
            .then(res => this.loadUser())
            .catch(err => console.log(err));
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


    render(){
  
        console.log('this.state.image')
        console.log(this.state.image)
        return(
            <div style={{marginTop: '5%'}}>
                {/* <img src={this.state.image} alt="profile image"></img> */}
                <div>First name: {this.state.firstname}</div>
                <div>Last name: {this.state.lastname}</div>
                <div>Email: {this.state.email}</div>

            </div>
        );
    }
}


export default UserInfos;