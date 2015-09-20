import socketIO from 'socket.io';
import tweetStore from './tweetStore/tweetStore';


export
class SocketIO {
    constructor() {
        this.io = socketIO(),
        this.setUp();
    }
    setPort(port) {
        this.port = port;
        return this;
    }
    listen(port) {
        this.io.listen(port);
        return this;
    }
    setUp() {
        this.io.on('connection', (socket)=> {
            this.socket = socket;
            this.socket.on('disconnect', ()=> tweetStore.close());
        });
    }
    emit(event, data) {
        this.socket.emit(event, data);
    }
}

export default new SocketIO();
