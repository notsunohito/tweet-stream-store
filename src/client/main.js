import React from 'react';
import App from './app';

var io = require('socket.io-client');
var socket = io.connect('http://localhost:1338');

socket.on('connect', function(){
    console.log('connect!');
});

socket.emit('track', { track: 'instagram' });

socket.on('disconnect', function(){
    console.log('disconnect!');
});

React.render(<App />, document.getElementById('app'));
