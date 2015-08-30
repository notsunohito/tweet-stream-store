import { App } from './app';
import { routers } from './routers/exports';


new App()
    .useMustache()
    .useBodyParser()
    .useCookieParser()
    .setViewDir('../client')
    .setPublicDir('../client')
    .addRouter('/api', routers.api)
    .addRouter('/', routers.index)
    .setPort(1337)
    .setWSPort(1338)
    .start();
