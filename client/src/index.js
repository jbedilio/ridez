import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
import config from './fbkeys';

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission()
    .then(() => {
        console.log('Permission Granted')
        return messaging.getToken();
    })
    .then(token => console.log(token))
    .catch(err => console.log('err: ', err));

ReactDOM.render(<App />, document.getElementById('root'));
