import { TWITTER_API_KEYS } from '../../config';
import { StreamAPI } from './streamApi';
import { Tweet } from '../db/tweet';


export
class TweetStore {
    constructor(twitter_api_keys) {
        this._twitter_api_keys = twitter_api_keys, 
        this._filters = [],
        this._reqParams = {},
        this._streamAPI,
        this._onSave;
    }
    /*
     * Public Methods
     */
    reqParams(reqParams) {
        this._reqParams = reqParams;
        return this;
    }
    addFilter(predicate) {
        this._filters.push(predicate);
        return this;
    }
    clearFilters() {
        this._filters = [];
        return this;
    }
    onSave(callback) {
        this._onSave = callback;
        return this;
    }
    start() {
        console.log('Tracking `'+ this._reqParams.track +'`...');
        return new StreamAPI(this._twitter_api_keys)
            .reqParams(this._reqParams)
            .onData(this.onData.bind(this))
            .onError(this.onError.bind(this))
            .onDisconnect(this.onDisconnect.bind(this))
            .open()
            .then((streamAPI)=> {
                this._streamAPI = streamAPI;
                return this;
            });
    }
    restart() {
        this.close();
        return this.start();
    }
    close() {
        console.log('Closed!');
        this._streamAPI && this._streamAPI.close();
    }
    /*
     * Private Methods
     */
    onData(tweet) {
        if(this.shouldSave(tweet)) {
            Tweet.create(tweet, (err)=> {
                if(err) console.log(err);
                this._onSave && this._onSave.bind(this)(err, tweet);
            });
        }
    }
    shouldSave(tweet) {
        return this._filters.reduce((memo, predicate)=> memo && predicate(tweet), true);
    }
    onError(err) {
        console.log(err);
    }
    onDisconnect(err) {
        console.log('Disconnected!');
        this.close();
    }
}

// シングルトン
export default new TweetStore(TWITTER_API_KEYS);
