import express from 'express';
import socketIO from '../models/socketIO';
import tweetStore from '../models/tweetStore/tweetStore';

const router = express.Router();

router.get('/world', (req, res, next)=> {
    res.json({ greeting: 'Hello from API!' });
});

router.post('/tweetStore/open', (req, res, next)=> {
    const { track } = req.body;

    tweetStore
        .reqParams({ track: track })
        // .addFilter((tweet)=> !!tweet.geo)
        .addFilter((tweet)=> tweet.lang === 'ja')
        .onSave((err, tweet)=> socketIO.emit('tweet', tweet))
        .open();

    res.json({tracking: track});
});

router.post('/tweetStore/close', (req, res, next)=> {

    tweetStore.close();

    res.sendStatus(200);
});

export default router;
