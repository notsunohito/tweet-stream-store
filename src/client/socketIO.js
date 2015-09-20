var io = require('socket.io-client');


export
class SocketIO {
    constructor(host) {
        this.socket = io.connect(host);
        this.setUp();
    }
    setUp() {
        this.socket.on('connect', function(){
            console.log('connect!');
        });
        this.socket.on('disconnect', function(){
            console.log('disconnect!');
        });
    }
    on(event, handler) {
        this.socket.on(event, handler);
        return this;
    }
    emit(event, data) {
        this.socket.emit(event, data);
    }
}

// シングルトン
export default new SocketIO('http://localhost:1338');
