import React, {Component} from 'react';
import API from './../../utils/API.js';

class Login extends Component {
    state = {
        username: "",
        password: "",
        currentUser: ""
    };

    componentWillMount() {
        API.logout()
            .catch(err => console.log(err));
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
            API.login({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                if(res.data.user) {
                    this.props.history.push('/ridez');
                }
                else {
                    console.log('no user');
                }
            })
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron text-center">
                                <h1>
                                login
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
                                <input className="form-control" id="username" 
                                onChange={this.handleInputChange}
                                type="text"  
                                name="username" 
                                placeholder="username"/>
                                {/* <input 
                                onChange={this.handleInputChange}
                                name="username"
                                type="username"
                                placeholder="username required"/> */}
                                </div><br />
                                <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-lock"></i>
                                </span>
                                <input className="form-control" id="password"
                                onChange={this.handleInputChange}
                                type="text"
                                name="password"
                                placeholder="password"/>
                                {/* <input
                                onChange={this.handleInputChange}
                                name="password"
                                type="password"
                                placeholder="password required" /> */}
                                </div><br />
                                <button
                                className="btn-primary"
                                disabled={!(this.state.username && this.state.password)}
                                onClick={this.handleFormSubmit}>
                                Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>             
        );
    }
}

export default Login;