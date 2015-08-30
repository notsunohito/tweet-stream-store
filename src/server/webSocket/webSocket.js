import SocketIO from 'socket.io';
import { TWITTER_API_KEYS } from '../config';
import { TweetStore } from '../models/exports';


export
class WebSocket {
    static get instance() {
        return instance;
    }
    constructor() {
        this.io = SocketIO(),
        this.tweetStore = new TweetStore(TWITTER_API_KEYS),
        this.io.on('connection', this.onConnection.bind(this));
    }
    setPort(port) {
        this.port = port;
        return this;
    }
    listen(port) {
        this.io.listen(port);
        return this;
    }
    onConnection(socket) {
        this.socket = socket;
        this.socket.on('track', this.onTrack.bind(this));
        this.socket.on('disconnect', this.onDisconnect.bind(this));
    }
    onDisconnect() {
        this.tweetStore.close();
    }
    onTrack(data){
        this.tweetStore
            .reqParams({ track: data.track })
            .addFilter((tweet)=> !!tweet.geo)
            .start();
    }
    emit(event, data){
        this.socket.emit(event, data);
    }
}

const instance = new WebSocket();
