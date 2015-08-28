import './models/db';
import { TWITTER_OPTIONS } from './config';
import StreamAPI from './twitter/streamApi';
import Tweet from './models/tweet';

export default
class TweetStore {
    constructor(options) {
        this.track = options.track;
    }
    start(){
        return new StreamAPI(TWITTER_OPTIONS)
            .track(this.track)
            .onData(this.onData)
            .onError(this.onError)
            .onDisconnect(this.onDisconnect)
            .open();
    }
    end() {
        this.streamAPI.close();
        console.log('End!');
    }
    onData(tweet) {
        if(tweet.geo){
            console.log(tweet);
            let _tweet = new Tweet(tweet);
            _tweet.save((err)=> {
                if(err) console.log(err);
            });
        }
    }
    onError(err) {
        console.log(err);
    };

    onDisconnect(err) {
        console.log('Disconnected!');
        process.exit(0);
    };
}
