import Promise from 'bluebird';
import Twitter from 'twitter';


export default
class StreamAPI {
    constructor(options) {
        this._twitter = new Twitter(options);
        this._stream,
        this._track,
        this._onData,
        this._onError,
        this._onDisconnect;
    }
    track(track){
        this._track = track;
        return this;
    }
    onData(callback) {
        this._onData = callback;
        return this;
    }
    onError(callback) {
        this._onError = callback;
        return this;
    }
    onDisconnect(callback) {
        this._onDisconnect = callback;
        return this;
    }
    open() {
        return new Promise((resolve, reject)=> {
            let params = { track: this._track };
            this._twitter.stream('statuses/filter', params, (stream)=> {
                if(this._onData) stream.on('data', this._onData);
                if(this._onError) stream.on('error', this._onError);
                if(this._onDisconnect) stream.on('disconnect', this._onDisconnect);
                this._stream = stream;
                resolve(this);
            });
        });
    }
    close() {
        this._stream.destroy();
    }
}
