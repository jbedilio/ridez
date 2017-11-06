import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from "../../utils/API";
import Nav from "../../components/Nav";

class Details extends Component {
    state = {
        ridez: {},
        currentUser: ""
    };

    componentDidMount() {
        API.getRidez(this.props.match.params.id)
            .then(res => {
                if(res.data.statusCode === 401){
                    this.props.history.push('./login');
                } else {
                    console.log('user:', res.data.sess);
                    this.setState({ currentUser: res.data.sess.passport.user, ridez: res.data.results})
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
                                    {this.state.ridez.start} to {this.state.ridez.stop}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 md-offset-1">
                            <article>
                                <h1>Details</h1>
                                <p>
                                    {this.state.ridez.details}
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <Link to="/">Back to Ridez</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;