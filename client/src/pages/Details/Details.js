import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from "../../utils/API";
import Nav from "../../components/Nav";
// import Ridez from "../Ridez";
import {MapContainer} from '../../components/MapContainer/MapContainer.js';
// import GoogleApiWrapper from '../../components/MapContainer/MapContainer.js';
// import Map from '../../components/Map';

class Details extends Component {
    state = {
        ride: {},
        currentUser: ""
    };

    componentDidMount() {
        API.getRidez(this.props.match.params.id)
            .then(res => {
                if(res.data.statusCode === 401){
                    this.props.history.push('./login');
                } else {
                    console.log('user:', res.data.sess);
                    this.setState({ currentUser: res.data.sess.passport.user, ride: res.data.results})
                }
            }).catch(err => console.log(err));
        }
    
    render() {
        return (
            <div>
                <Nav userInfo={this.state.currentUser} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron">
                                <h1>
                                    {this.state.ride.start} to {this.state.ride.stop}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <article>
                                <h1>Details</h1>
                                <p>
                                    {this.state.ride.details}
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <Link to="/">Back to Ridez</Link>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12" style={{width: '100%', height: '400px'}}>
                        <MapContainer />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;