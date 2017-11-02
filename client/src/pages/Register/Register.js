import React, {Component} from 'react';
import API from './../../utils/API.js'

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
        if(this.state.username && this.state.password) {
            API.register({
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                smoker: this.state.smoker,
                seats: this.state.seats,
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
                            <form>
                                <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input
                                className="form-control" id="usernameR"
                                onChange={this.handleInputChange}
                                name="username"
                                type="text"
                                placeholder="username required"/>
                                </div><br/>
                                <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-lock"></i>
                                </span>
                                <input
                                className="form-control" id="passwordR"
                                onChange={this.handleInputChange}
                                name="password"
                                type="password"
                                placeholder="password required"/>
                                </div><br/>
                                <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input
                                className="form-control" id="firstName"
                                onChange={this.handleInputChange}
                                name="firstName"
                                type="text"
                                placeholder="first name required"/>
                                </div><br />
                                <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input
                                className="form-control" id="lastName"
                                onChange={this.handleInputChange}
                                name="lastName"
                                type="text"
                                placeholder="last name required" />
                                </div><br />
                                <input
                                className="form-control" id="emailR"
                                onChange={this.handleInputChange}
                                name="email"
                                type="text"
                                placeholder="email required" />
                                <div className="form-group text-left">
                                <label formFor="smoker">Smoke:</label>
                                    <select className="form-control" id="sell"
                                        onChange={this.handleInputChange}
                                        name="smoker"
                                        type="sell">
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                <div className="form-group text-left">
                                Open Seats (0 to 7):
                                <input className="form-control" id="seats"
                                onChange={this.handleInputChange}
                                name="seats"
                                type="number"
                                placeholder="email required"/>
                                </div>
                                <button className="btn-success" id="registerButton"
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