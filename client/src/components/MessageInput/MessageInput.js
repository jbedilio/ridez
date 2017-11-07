import React, {Component} from 'react';
import trim from 'trim';
// import API from '../../utils/API';
// import Nav from '../Nav';
// import Login from '../../pages/Login';

class MessageInput extends Component {
    // state = {
    //     username: '',
    //     currentUser: ''
    // }

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.state = {
            message: ''
        };
    }
    onChange(e) {
        this.setState({
            message: e.target.value,
        });
    }
    onKeyup(e) {
        if (e.keyCode === 13 && trim(e.target.value) !== '') {
            e.preventDefault();
            let dbCon = this.props.db.database().ref('/messages');
            dbCon.push({
                // username: this.props.username,
                message: trim(e.target.value)
            });
            this.setState({
                message: ''
            });
        }
    }

    render() {
        return (
            <form>
                <textarea
                    className="form-control "
                    placeholder="Type a message"
                    onChange={this.onChange}
                    onKeyUp={this.onKeyup}
                    value={this.state.message}>
                </textarea>
            </form>
        );
    }
};

export default MessageInput;