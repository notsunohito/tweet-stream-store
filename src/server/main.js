import { TWITTER_API_KEYS } from './config';
import { TweetStore } from './models/exports';

new TweetStore(TWITTER_API_KEYS)
    .reqParams({ track: 'instagram' })
    .addFilter((tweet)=> !!tweet.geo)
    .start();
