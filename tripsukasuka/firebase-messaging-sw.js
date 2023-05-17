importScripts("https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.15.5/firebase-messaging.js");

//Using singleton breaks instantiating messaging()
// App firebase = FirebaseWeb.instance.app;

firebase.initializeApp({
    apiKey: "AIzaSyCLRwetLvl-pzqaGjVujgS4pwhrh1i1rwk.",
    authDomain: "tripsukasuka-c406d.firebaseapp.com",
    databaseURL: "tripsukasuka-c406d.firebaseio.com",
    projectId: "tripsukasuka-c406d",
    storageBucket: "tripsukasuka-c406d.appspot.com",
    messagingSenderId: "295541258098",
    appId: "1:295541258098:web:69867c019dede4d6d50feb",
    measurementId: "G-V8V2NRTMXL",
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});