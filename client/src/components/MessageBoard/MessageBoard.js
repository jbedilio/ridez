import React, {Component} from 'react';
import firebase from 'firebase';
import MessageInput from '../MessageInput';
import MessageList from '../MessageList';
import Header from '../Header';

class MessageBoard extends Component {

    render() {
        return (
            <div className="col-md-6 text-center">
                <Header title="Messaging" />
                <MessageList db={firebase} />
                <MessageInput db={firebase} />
            </div>
        );
    }
}

export default MessageBoard;