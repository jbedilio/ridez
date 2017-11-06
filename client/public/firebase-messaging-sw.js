importScripts("https://www.gstatic.com/firebasejs/4.6.1/firebase-app.js");
importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-messaging.js');
import config from '../src/fbkeys.js';


firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
    console.log('[firebase-messaging-sw.js] got background message ', payload);
    const title = "New Message";
    const options = {
        body: payload.data.status,
        icon: '/firebase-logo.png'
    };
    return self.registration.shownotification(title, options);
})