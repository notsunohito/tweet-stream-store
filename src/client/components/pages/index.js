import Top from './top';
import About from './about';
import NotFound from './notfound';

export default 
class Index{
    static get PageClasses(){
        return [
            Top,
            About,
            NotFound
        ];
    }
}
