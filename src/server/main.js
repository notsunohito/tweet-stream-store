import { App } from './app';
import { routers } from './routers/exports';
import { TWITTER_API_KEYS } from './config';
import { TweetStore } from './models/exports';

// new TweetStore(TWITTER_API_KEYS)
//     .reqParams({ track: 'instagram' })
//     .addFilter((tweet)=> !!tweet.geo)
//     .start();

new App()
    .useMustache()
    .useBodyParser()
    .useCookieParser()
    .setViewDir('../client')
    .setPublicDir('../client')
    .addRouter('/api', routers.api)
    .addRouter('/', routers.index)
    .setPort(1337)
    .start();
