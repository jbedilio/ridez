import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 className="messageHeader">
                    {this.props.title}
                </h1>
            </div>
        );
    }
}
export default Header;