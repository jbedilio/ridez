import React, {Component} from 'react';
import API from './../../utils/API.js'
import Nav from "../../components/Nav";

class Register extends Component {
    state = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        smoker: "",
        seats: "",
        currentUser: "",
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.username && this.state.password &&
            this.state.firstName && this.state.lastName &&
            this.state.email && this.state.smoker &&
            this.state.seats) {
            API.register({
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                smoker: this.state.smoker,
                seats: this.state.seats
            }).then(res => {
                if(res.data.user) {
                    console.log(res.data.user);
                    this.props.history.push('/ridez');
                }
                else {
                    console.log('no user');
                }
            }).catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <Nav userInfo={this.state.currentUser} />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="jumbotron">
                                    <h1>
                                    Register
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <form action="/register" method="POST">
                                    <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-user"></i>
                                    </span>
                                    <input
                                    className="form-control" id="username"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    name="username"
                                    placeholder="username required"/>
                                    </div><br/>
                                    <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-lock"></i>
                                    </span>
                                    <input
                                    className="form-control" id="password"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    name="password"
                                    placeholder="password required"/>
                                    </div><br/>
                                    <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-user"></i>
                                    </span>
                                    <input
                                    className="form-control" id="firstName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    name="firstName"
                                    placeholder="first name required"/>
                                    </div><br />
                                    <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-user"></i>
                                    </span>
                                    <input
                                    className="form-control" id="lastName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    name="lastName"
                                    placeholder="last name required" />
                                    </div><br />
                                    <input
                                    className="form-control" id="email"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    name="email"
                                    placeholder="email required" />
                                    <div className="form-group text-left">
                                    <label formfor="smoker">Smoke:</label>
                                        <select className="form-control" id="sell"
                                            onChange={this.handleInputChange}
                                            name="smoker"
                                            type="boolean">
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div className="form-group text-left">
                                    Open Seats (0 to 7):
                                    <input className="form-control" id="seats"
                                    onChange={this.handleInputChange}
                                    name="seats"
                                    type="number"
                                    placeholder="open seats"/>
                                    </div>
                                    <button className="btn-primary" id="registerButton"
                                    disabled={!(this.state.username && this.state.password)}
                                    onClick={this.handleFormSubmit}>
                                    Register
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

export default Register;