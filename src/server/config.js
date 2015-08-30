import _ from 'lodash';


const TWITTER_CONSUMER_KEY        = process.env.TWITTER_CONSUMER_KEY        || '';
const TWITTER_CONSUMER_SECRET     = process.env.TWITTER_CONSUMER_SECRET     || '';
const TWITTER_ACCESS_TOKEN_KEY    = process.env.TWITTER_ACCESS_TOKEN_KEY    || '';
const TWITTER_ACCESS_TOKEN_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET || '';


export const TWITTER_API_KEYS = {
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token_key: TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
};

_.values(TWITTER_API_KEYS).forEach((value)=> {
    if(!value) throw new Error('Twitter API Keys and Access Tokens must be set! See `src/server/config.js`.\n');
});
