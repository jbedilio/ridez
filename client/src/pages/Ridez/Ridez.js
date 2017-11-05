import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from '../../utils/API';
import Nav from '../../components/Nav';

class Ridez extends Component {
    state = {
        ridez: [],
        username: "",
        start: "",
        stop: "",
        details: "",
        currentUser: ""
    };

    componentDidMount() {
        this.loadRidez();
    }

    loadRidez = () => {
        API.getRidez()
        .then(res => {
            if(res.data.statusCode === 401){
                this.props.history.push('/login');
            }
            else {
                // console.log('user:', res.data.sess);
                this.setState({
                    currentUser: res.data.sess.passport.user,
                    ridez: res.data.results,
                    username: "",
                    start: "",
                    stop: "",
                    details: ""
                })
            }
        }).catch(err => console.log(err));
    };

    deleteRidez = (id) => {
        API.deleteRidez(id)
        .then(res => this.loadRidez())
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
        if (this.state.start && this.state.stop) {
            API.save({
                username: this.state.username,
                start: this.state.start,
                stop: this.state.stop,
                details: this.state.details
            })
            .then(res => this.loadRidez())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <Nav userInfo={this.state.currentUser}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="jumbotron text-center">
                                    <h1>Where to? - Create Ridez</h1>
                                </div>
                                <form>
                                    <input className="form-control" id="username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                        type="text"
                                        name="username"
                                        placeholder="posting username required" />
                                    <br />
                                    <input className="form-control" id="start"
                                        value={this.state.start}
                                        onChange={this.handleInputChange}
                                        type="text"
                                        name="start"
                                        placeholder="start required" />
                                    <br />
                                    <input
                                        value={this.state.stop}
                                        className="form-control" id="stop"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        name="stop"
                                        placeholder="stop required" />
                                    <br />
                                        <label formfor="details">Details:</label>
                                        <textarea className="form-control" rows="5" id="Details"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            name="details"
                                            placeholder="details"></textarea>
                                    <br />
                                    <button className="btn-primary" id="newRidez"
                                        disabled={!(this.state.username && this.state.start && this.state.stop)}
                                        onClick={this.handleFormSubmit}>
                                        loadRidez
                                    </button>
                                    <br /><br />
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <div className="jumbotron">
                                <h1>Ridez</h1>
                                </div>
                                {this.state.ridez.length ? (
                                    <ul style={{listStyleType: 'none'}}>
                                        {this.state.ridez.map(ridez => (
                                            <form className="text-left">
                                                <p><strong>
                                                    {ridez.username}
                                                </strong></p>
                                                <li style={{textAlign: 'left'}}
                                                    key={ridez._id}
                                                    name="id"
                                                    value={ridez._id}>
                                                    <Link to={'/ridez/' + ridez._id}>
                                                        <strong>
                                                            {ridez.start} --> {ridez.stop}
                                                        </strong>
                                                    </Link>
                                                        <button className="btn btn-danger" id="delete"
                                                            style={{ marginLeft: 12 + 'px', marginBottom: 5 + 'px' }}
                                                            name='_id'
                                                            value={ridez._id}
                                                            onClick={() => this.deleteRidez(ridez._id)}>
                                                            Delete
                                                        </button>
                                                    <p><strong>
                                                        {ridez.details}
                                                    </strong></p>
                                                </li>
                                            </form>
                                        ))}
                                    </ul>
                                ) : (
                                    <h3>No Ridez Available</h3>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

export default Ridez;