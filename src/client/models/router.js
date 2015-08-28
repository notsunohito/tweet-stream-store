import router from 'page';


export default
class Router{
    constructor(onChangePageName){
        if(document.origin === 'null') {
            return new DummyRouter(onChangePageName);
        }
        this.setupRouter();
        return router;
    }
    setupRouter(){
        router('/', ()=> {
            onChangePageName('top');
        });
        router('/about', ()=> {
            onChangePageName('about');
        });
        router('*', ()=> {
            onChangePageName('notfound');
        });
    }
    
}

class DummyRouter{
    constructor(onChangePageName){
        this.show = onChangePageName;
    }
    start(){
        this.show('top');
    }
}
