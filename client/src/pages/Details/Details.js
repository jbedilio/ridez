import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from "../../utils/API";
import Nav from "../../components/Nav";
import SearchResultsContainer from './../../components/SearchResultsContainer/SearchResultsContainer.js';


import Ridez from "../Ridez";
// import {MapContainer} from '../../components/MapContainer/MapContainer.js';
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
                    this.props.history.push('/login');
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
                            <div className="jumbotron text-center">
                                <h1>
                                    Details
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{this.state.ride.start} Orlando to Lakeland {this.state.ride.stop}</h1>
                                <p>
                                    <h2>Mon - Fri 8a and back at 3p{this.state.ride.details}</h2>
                                </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <Link to="/">Back to Ridez</Link>
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <div>
                            <img src="https://images.sunshine.co.uk/ss/maps/26/38/1568_9.png" alt="map"/>
                        </div>
                        <SearchResultsContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;