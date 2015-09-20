import router from 'page';


export 
class Router{
    constructor(){
        this.router = router;
        this.setupRouter();
    }
    setupRouter(){
        this.router('/', ()=> {
            this.handleURLChanged('top');
        });
        this.router('/about', ()=> {
            this.handleURLChanged('about');
        });
        this.router('/stream', ()=> {
            this.handleURLChanged('stream');
        });
        this.router('*', ()=> {
            this.handleURLChanged('notfound');
        });
    }
    setURLChangedHandler(handler) {
        this.handleURLChanged = handler;
        return this;
    }
    start() {
        this.router.start();
    }
    show(pageName) {
        const url = this.pageNameToURL(pageName);
        this.router.show(url);
    }
    pageNameToURL(pageName) {
        if(pageName === 'top') return '/';
        return '/'+ pageName;
    }
}

// シングルトン
export default new Router();
