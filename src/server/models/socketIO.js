import socketIO from 'socket.io';
import tweetStore from './tweetStore/tweetStore';


export
class SocketIO {
    constructor() {
        this.io = socketIO(),
        this.tweetStore = tweetStore,
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
            this.socket.on('disconnect', ()=> this.tweetStore.close());
            this.socket.on('track', this.onTrack.bind(this));
        });
    }
    onTrack(data){
        this.tweetStore
            .reqParams({ track: data.track })
            // .addFilter((tweet)=> !!tweet.geo)
            .addFilter((tweet)=> tweet.lang === 'ja')
            .onSave((err, tweet)=> this.socket.emit('tweet', tweet))
            .start();
    }
}

export default new SocketIO();
