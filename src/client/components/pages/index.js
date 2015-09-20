import Top from './top';
import About from './about';
import Stream from './stream';
import NotFound from './notfound';

export default 
class Index{
    static get PageClasses(){
        return [
            Top,
            About,
            Stream,
            NotFound
        ];
    }
}
