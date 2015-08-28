import TweetStore from './tweetStore';

new TweetStore({ track: 'instagram' })
    .start()
    .then((streamAPI)=> {
        setTimeout(()=> {
            console.log('Close!');
            streamAPI.close();
        }, 10000);
        setTimeout(()=> {
            console.log('Start!');
            streamAPI.open();
        }, 20000);
    });
