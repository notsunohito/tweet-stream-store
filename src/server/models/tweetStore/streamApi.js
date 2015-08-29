import Promise from 'bluebird';
import Twitter from 'twitter';


export
class StreamAPI {
    constructor(twitter_api_keys) {
        this._twitter = new Twitter(twitter_api_keys),
        this._stream,
        this._reqParams,
        this._onData,
        this._onError,
        this._onDisconnect;
    }
    reqParams(reqParams) {
        this._reqParams = reqParams;
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
            this._twitter.stream('statuses/filter', this._reqParams, (stream)=> {
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
