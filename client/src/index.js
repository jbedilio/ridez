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

messaging.onMessage(payload => {
    console.log('onMessage: ', payload);
});
// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken()
    .then(function (currentToken) {
        if (currentToken) {
            // sendTokenToServer(currentToken);
            // updateUIForPushEnabled(currentToken);
        } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
            // Show permission UI.
            // updateUIForPushPermissionRequired();
            // setTokenSentToServer(false);
        }
    })
    .catch(function (err) {
        console.log('An error occurred while retrieving token. ', err);
        // showToken('Error retrieving Instance ID token. ', err);
        // setTokenSentToServer(false);
    });


ReactDOM.render(<App />, document.getElementById('root'));
