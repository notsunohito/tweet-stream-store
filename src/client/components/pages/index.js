import Top from './top';
import About from './about';

export default 
class Index{
    static get PageClasses(){
        return [
            Top,
            About
        ];
    }
}
