import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from '../../utils/API';
import Nav from '../../components/Nav';
import MessageBoard from '../../components/MessageBoard';

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

    deleteRidez = id => {
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
                                <h1>{"Ridez available: " + this.state.ridez.length}</h1>
                                </div>
                                {this.state.ridez.length ? (
                                    <ul style={{listStyleType: 'none'}}>
                                        {this.state.ridez.map(ride => (
                                                <li style={{textAlign: 'left'}}
                                                    key={ride._id}
                                                    name={ride.username}
                                                    value={ride._id}>
                                                    <form className="text-left"
                                                          key={ride._id}>
                                                        <p><strong>
                                                            {ride.username}
                                                        </strong></p>
                                                    <Link to={'/ridez/' + ride._id}>
                                                        <strong>
                                                            {ride.start} --> {ride.stop}
                                                        </strong>
                                                    </Link>
                                                        <button className="btn btn-danger"
                                                            key={ride._id}
                                                            style={{ marginLeft: 12 + 'px', marginBottom: 5 + 'px' }}
                                                            name='_id'
                                                            value={ride._id}
                                                            onClick={() => this.deleteRidez(ride._id)}>
                                                            Delete
                                                        </button>
                                                    <p><strong>
                                                        {ride.details}
                                                    </strong></p>
                                                </form>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <h3>No Ridez Available</h3>
                                )}
                            </div>
                            <MessageBoard />
                        </div>
                    </div>
                </div>
            );
        }
    }

export default Ridez;